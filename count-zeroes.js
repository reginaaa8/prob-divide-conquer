function countZeroes(arr) {
    // count the number of zeroes in an array 
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while(leftIdx <= rightIdx){
        // find middle index 
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        // see if middleIdx is the first time zero appears in arr - also check if middleIdx is the beginning of the array
        if(arr[middleIdx] === 0 && (middleIdx === 0 || arr[middleIdx - 1] === 1)){
            return arr.length - middleIdx;
        }
        // if arr[middleIdx] equals 1, that means no zero was in the first half of the array - move start idx to middle
        else if(arr[middleIdx] === 1){
            leftIdx = middleIdx + 1;
        }
        // if the arr[middleIdx] is 0, but not the first 0, move rightIdx 
        else {
            rightIdx = middleIdx -1;
        }
    }
    // return 0 if while loop exited - no zeroes found in array 
    return 0;
}

module.exports = countZeroes