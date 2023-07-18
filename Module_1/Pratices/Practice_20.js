//Bài 20: Liệt kê các dòng có tổng lớn nhất
var arr = [
    [1, 2, 5, 2, 12],
    [12, 2, 5, 8, 6],
    [10, 7, 5, 3],
    [1, 3, 9, 4, 6, 7, 8, 2]
]
function listMaxSumRow(array) {
    let sum = [];
    let count = 0;
    let maxSumRow = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (count == 0) {
                sum[i] += array[i][j];
                maxSumRow = sum[i];
                count = 1;
            }
            else
                sum[i] += array[i][j];
        }
        if (sum[i] > maxSumRow) {
            maxSumRow = sum[i];
        }
    }
    return maxSumRow;
}
console.log(listMaxSumRow(arr));


// ax2 + bx + c = 0;
let a = 6, b = 7, c = 4;
console.log(a + "x2 + " + b + "x + " + c + " = 0");
console.log(`${a}x2 + ${b}x + ${c} = 0`);