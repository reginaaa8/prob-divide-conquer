function findRotatedIndex(arr, val) {
    // find index of a given value in a rotated array

    // search helper function 
    function search(arr, val, leftIdx, rightIdx){
        while(leftIdx <= rightIdx){
            // find middle index 
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            if(arr[middleIdx] === val) {
                return middleIdx;
            }
            else if(arr[middleIdx] < val){
                leftIdx = middleIdx + 1;
            }
            else {
                rightIdx = middleIdx -1;
            }
        }
        return -1; // value is not found in array
    }

    // figure out where array rotates  
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    while(leftIdx < rightIdx){
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(arr[middleIdx] > arr[rightIdx]){
            leftIdx = middleIdx + 1;
        }
        else {
            rightIdx = middleIdx;
        }
    }

    let pivotPoint = leftIdx;

    // figure out which part of array to search in 
    leftIdx = 0;
    rightIdx = arr.length - 1;
    if(val >= arr[pivotPoint] && val <= arr[rightIdx]){
        leftIdx = pivotPoint;
    }
    else {
        rightIdx = pivotPoint - 1;
    }

    return search(arr, val, leftIdx, rightIdx);

}

module.exports = findRotatedIndex