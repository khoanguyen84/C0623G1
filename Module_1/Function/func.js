// thiết kế 1 hàm tên là genarateArray
// nhiệm vụ của hàm này là tạo ra 1 mảng có 10 phần tử và các giá trị của mảng
// trong khoảng [10, 50]
// sau đó hiển thị mảng này ra console

function genarateArray(size, min, max){
    let numbers = new Array(size);
    for(let i = 0; i < numbers.length; i++){
        numbers[i] = Math.floor(Math.random()*(max - min + 1) + min)
    }

    return numbers;
}


console.log(genarateArray(10, 10, 50))


let array = genarateArray(15, 100, 350)

console.log(array);
document.getElementsByTagName('h1')[0].innerText = array

// let n_1 = [10, 11] //tạo ra 1 mảng n_1 có 1 phần tử và phần tử đó có giá trị là 10
// let n_2 = new Array(10, 11) // tạo ra 1 mảng n_2 có 10 phần tử và các giá là là empty

// console.log(n_1.length);
// console.log(n_2.length);