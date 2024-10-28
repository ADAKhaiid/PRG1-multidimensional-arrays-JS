/* const scores = [[2, 2, 2], [2, 2, 2], [2, 1, 2]]
let smallest = Infinity

for (i = 0 ; i < scores.length ; i++) {
    for (j = 0; j < scores[i].length; j++) {
        if (scores[i][j] < smallest){
            smallest = scores[i][j]       
        }
}}

console.log(smallest) */

const readlineSync = require('readline-sync');

const board = [
    ["", "", ""], // Row 1
    ["", "", ""], // Row 2
    ["", "", "x"]  // Row 3
];



