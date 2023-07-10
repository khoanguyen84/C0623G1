// let n = 5;
// n = n + 4 => n += 4
// n = n + 1 => n += 1 => n++

// HD1: tăng n lên 1 đơn vị (2)
// HD2: so sánh n >= 6 ko? (1)
// HD2: lấy n cộng thêm 2 (3)
// if (n++ + 2 >= 8) {
//     console.log('true');
// }
// console.log(n);

// HD1: tăng n lên 1 đơn vị (1)
// HD2: so sánh n >= 6 ko? (2)
// if (++n + 2 >= 8) {
//     console.log('true');
// }
// console.log(n);

let count = 0;
do {
    count++;
} while (count++ < 10);