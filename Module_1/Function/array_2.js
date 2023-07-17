let matrix = [
    [5, 8, 4],
    [10, 4, 3, 5, 6],
    [3, 7, 4, 6, 3, 6, 9],
    [8, 5, [100, 105, 200, 205], 5, 4, 3]
]

// let square = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5]
// ]

// console.log(square);

function createMatrix(size_1, size_2, min, max) {
    let matrix = new Array(size_1);
    for (let i = 0; i < matrix.length; i++) {
        matrix[i] = new Array(size_2);
        for(let j = 0; j < matrix[i].length; j++){
            matrix[i][j] = Math.floor(Math.random()*(max - min + 1) + min)
        }
    }
    return matrix;
}

console.log(createMatrix(4, 5, 10, 50));

alert(document.getElementById('name').value)

function showName(){
    alert(document.getElementById('name').value)
}

// function enterName(){
//     console.log(document.getElementById('name').value);
// }