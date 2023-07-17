var caroData;
var player_1 = true;
var numberOfWin = 3;
var isWin = false;

function createCaro(size_1, size_2) {
    let caro = new Array(size_1);
    for (let i = 0; i < caro.length; i++) {
        caro[i] = new Array(size_2);
        for (let j = 0; j < caro[i].length; j++) {
            caro[i][j] = 0
        }
    }
    return caro;
}

function drawCaro(caroData) {
    let caroTable = ""
    for (let i = 0; i < caroData.length; i++) {
        caroTable += "<tr>";
        for (let j = 0; j < caroData[i].length; j++) {
            caroTable += `<td onclick='change(${i},${j})'>${caroData[i][j] == 0 ? '&nbsp;&nbsp;' : caroData[i][j]}</td>`
        }
        caroTable += "</tr>";
    }
    document.getElementById('tbCaro').innerHTML = caroTable;
}


function change(i, j) {
    if (player_1 == true) {
        caroData[i][j] = 'X';
    }
    else {
        caroData[i][j] = 'O';
    }
    let result = checkWin(caroData, player_1)
    if (result == true) {
        // alert(`${player_1 == true ? 'Player 1' : 'Player 2'} is winner`);
        document.getElementById('result').innerText = `${player_1 == true ? 'Player 1' : 'Player 2'} is winner`
    }
    drawCaro(caroData);
    player_1 = !player_1;
}


function checkWin(caroData, player) {
    let symbol = player == true ? "X" : "O"
    for (let i = 0; i < caroData.length; i++) {
        for (let j = 0; j < caroData[i].length - numberOfWin; j++) {
            if (caroData[i][j] == symbol && caroData[i][j + 1] == symbol && caroData[i][j + 2] == symbol) {
                return true;
            }
        }
    }
    return false;
}
function play() {
    // let row = Number(document.getElementById('row').value)
    // let col = Number(document.getElementById('col').value)
    // let caroData = createCaro(row, col)
    caroData = createCaro(5, 5)
    drawCaro(caroData);
}

play()

