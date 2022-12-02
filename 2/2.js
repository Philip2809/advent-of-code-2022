const fs = require('fs');

const shapePoints = {
    X: 1,
    Y: 2,
    Z: 3,
}

const losspoints = 0;
const drawpoints = 3;
const winpoints = 6;

function outcome(opponent, you) {
    // check if you win
    if (you === 'X' && opponent === 'C') return winpoints;
    if (you === 'Y' && opponent === 'A') return winpoints;
    if (you === 'Z' && opponent === 'B') return winpoints;

    // check if you lose
    if (you === 'X' && opponent === 'B') return losspoints;
    if (you === 'Y' && opponent === 'C') return losspoints;
    if (you === 'Z' && opponent === 'A') return losspoints;

    // check if you draw
    if (you === 'X' && opponent === 'A') return drawpoints;
    if (you === 'Y' && opponent === 'B') return drawpoints;
    if (you === 'Z' && opponent === 'C') return drawpoints;
}

function whatDoINeed(opponent, outcome) {
    // check if you lose
    if (outcome === 'X') {
        if (opponent === 'A') return 'Z';
        if (opponent === 'B') return 'X';
        if (opponent === 'C') return 'Y';
    }
    // check if you draw
    if (outcome === 'Y') {
        if (opponent === 'A') return 'X';
        if (opponent === 'B') return 'Y';
        if (opponent === 'C') return 'Z';
    }
    // check if you win
    if (outcome === 'Z') {
        if (opponent === 'A') return 'Y';
        if (opponent === 'B') return 'Z';
        if (opponent === 'C') return 'X';
    }
}

let totalpoints = 0;

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    data.split(/\r?\n/).forEach(line => {
        const shapes = line.split(' ');
        if (shapes.length === 1) return;
        const myshape = whatDoINeed(shapes[0], shapes[1]);
        const roundpoints = outcome(shapes[0], myshape) + shapePoints[myshape];
        totalpoints += roundpoints;
    });
    console.log(totalpoints);
});