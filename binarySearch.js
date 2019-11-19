/**
 * 二分查找
 * @param {*} target 
 * @param {*} arr 
 * @param {*} start 
 * @param {*} end 
 */
let binarySearch = function (target, arr, start, end) {
    var start = start || 0;
    var end = end || arr.length - 1;

    var mid = parseInt(start + (end - start) / 2);
    if (target == arr[mid]) {
        return mid;
    } else if (target > arr[mid]) {
        return binarySearch(target, arr, mid + 1, end);
    } else {
        return binarySearch(target, arr, start, mid - 1);
    }
    return -1;
}

let array = [1, 3, 80, 9, 9, 109, 0];
let resArray = binarySearch(109, array, 1, 0);
console.log(resArray);
