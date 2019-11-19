/**
 * 选择排序
 */

let selectionSort = function (arr) {
    let min, temp;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

let array = [1, 3, 80, 9, 9, 109, 0];
let resArray = selectionSort(array);
console.log(resArray);