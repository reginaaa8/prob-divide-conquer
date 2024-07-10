function sortedFrequency(arr, val) {
    // return the number of times a value occurs in an array

    function findFirst(arr, val) {
        // return the first occurence of val in the array
        let leftIdx = 0;
        let rightIdx = arr.length -1;
        
        while(leftIdx <= rightIdx){
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            // check if middleIdx is the first occurrence 
            if(arr[middleIdx] === val && (arr[middleIdx - 1] !== val || middleIdx === 0)){
                return middleIdx;
            }
            else if (arr[middleIdx] < val){
                leftIdx = middleIdx + 1;
            }
            else {
                rightIdx = middleIdx - 1;
            }
        }
        return -1; // value not found in array
    }

    function findLast(arr, val){
        // return the last occurence of val in the array 
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
        
        while(leftIdx <= rightIdx){
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            // check if middleIdx is the last occurrence 
            if(arr[middleIdx] === val && (arr[middleIdx + 1] !==val || middleIdx === arr.length - 1)){
                return middleIdx;
            }
            else if(arr[middleIdx] < val){
                leftIdx = middleIdx + 1;
            }
            else {
                rightIdx = middleIdx - 1;
            }
        }
        return -1; // value not found in array
    }

    let firstIdx = findFirst(arr, val);

    if(firstIdx === -1){
        return -1; // value is not in array
    }

    let lastIdx = findLast(arr, val);
    return lastIdx - firstIdx + 1;

}

module.exports = sortedFrequency