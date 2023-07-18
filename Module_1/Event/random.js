// random number [min, max]

// Math.floor(Math.random() * (max - min + 1) + min)

let min = 15;
let max = 20; 
console.log(Math.floor(Math.random() * (max - min + 1) + min));

// Math.random() -> (0, 1) -> 0.01 -> 0.99
// Math.random() * 6 ->  -> 0.06 -> 5.94
// Math.random() * 6 + 15 ->  -> 15.06 -> 20.94
// Math.floor(Math.random() * 6 + 15) ->  -> 15 -> 20

