/**
 * 插入排序
 */

let insertSort = function (arr) {
    let v, j;
    for(let i = 2; i < arr.length; i++) {
        v = arr[i];
        j = i;
        while(arr[j-1] > v && j>=1) {
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = v;
    }
    return arr;
}

let array = [1, 3, 80, 9, 9, 109, 0];
let resArray = insertSort(array);
console.log(resArray);