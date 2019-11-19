/**
 * 冒泡排序
 */
let bubbleSort = function (arr) {
    let i = arr.length - 1; //初始时,最后位置保持不变 
    while (i > 0) {
        var pos = 0; //每趟开始时,无记录交换
        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j]; arr[j] = arr[j + 1]; arr[j + 1] = tmp;
                pos = j; //记录最后交换的位置  
            }
        }
        i = pos;
    }
    return arr;
}
let array = [1, 3, 80, 9, 9, 109, 0];
let resArray = bubbleSort(array);
console.log(resArray);