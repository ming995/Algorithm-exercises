/**
 * 快速排序
 * @param {Array} arr 
 */
let quickSort = function (arr) {
    if (arr.length <= 1) return arr;
    // 获取数组中间数，向下取整作为基准点
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

let array = [1, 3, 80, 9, 9, 109, 0];

let resArray = quickSort(array);
console.log(resArray);