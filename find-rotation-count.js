function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (arr[leftIdx] <= arr[rightIdx]){
            return 0;
        }

        // Check if middleIdx is the rotation point
        if (middleIdx < rightIdx && arr[middleIdx] > arr[middleIdx + 1]) {
            return middleIdx + 1;
        }
        if (middleIdx > leftIdx && arr[middleIdx - 1] > arr[middleIdx]) {
            return middleIdx;
        }

        // Decide the side to continue the search
        if (arr[middleIdx] > arr[rightIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return 0;
}

module.exports = findRotationCount