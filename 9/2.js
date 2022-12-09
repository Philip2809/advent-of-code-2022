const fs = require('fs');

let hX = 0;
let hY = 0;
let tX1 = 0;
let tY1 = 0;
let tX2 = 0;
let tY2 = 0;
let tX3 = 0;
let tY3 = 0;
let tX4 = 0;
let tY4 = 0;
let tX5 = 0;
let tY5 = 0;
let tX6 = 0;
let tY6 = 0;
let tX7 = 0;
let tY7 = 0;
let tX8 = 0;
let tY8 = 0;
let tX9 = 0;
let tY9 = 0;
const positions = new Set();

function calculateTail1() {
    // check all directions
    if (hX === tX1 && hY === tY1) return;
    if (Math.abs(hX - tX1) === 1 && hY === tY1) return;
    if (Math.abs(hY - tY1) === 1 && hX === tX1) return;
    if (Math.abs(hX - tX1) === 1 && Math.abs(hY - tY1) === 1) return;

    // move tail
    if (hX > tX1) tX1++;
    if (hX < tX1) tX1--;
    if (hY > tY1) tY1++;
    if (hY < tY1) tY1--;
}

function calculateTail2() {
    // check all directions
    if (tX1 === tX2 && tY1 === tY2) return;
    if (Math.abs(tX1 - tX2) === 1 && tY1 === tY2) return;
    if (Math.abs(tY1 - tY2) === 1 && tX1 === tX2) return;
    if (Math.abs(tX1 - tX2) === 1 && Math.abs(tY1 - tY2) === 1) return;

    // move tail
    if (tX1 > tX2) tX2++;
    if (tX1 < tX2) tX2--;
    if (tY1 > tY2) tY2++;
    if (tY1 < tY2) tY2--;
}

function calculateTail3() {
    // check all directions
    if (tX2 === tX3 && tY2 === tY3) return;
    if (Math.abs(tX2 - tX3) === 1 && tY2 === tY3) return;
    if (Math.abs(tY2 - tY3) === 1 && tX2 === tX3) return;
    if (Math.abs(tX2 - tX3) === 1 && Math.abs(tY2 - tY3) === 1) return;

    // move tail
    if (tX2 > tX3) tX3++;
    if (tX2 < tX3) tX3--;
    if (tY2 > tY3) tY3++;
    if (tY2 < tY3) tY3--;

}

function calculateTail4() {
    // check all directions
    if (tX3 === tX4 && tY3 === tY4) return;
    if (Math.abs(tX3 - tX4) === 1 && tY3 === tY4) return;
    if (Math.abs(tY3 - tY4) === 1 && tX3 === tX4) return;
    if (Math.abs(tX3 - tX4) === 1 && Math.abs(tY3 - tY4) === 1) return;

    // move tail
    if (tX3 > tX4) tX4++;
    if (tX3 < tX4) tX4--;
    if (tY3 > tY4) tY4++;
    if (tY3 < tY4) tY4--;

}

function calculateTail5() {
    // check all directions
    if (tX4 === tX5 && tY4 === tY5) return;
    if (Math.abs(tX4 - tX5) === 1 && tY4 === tY5) return;
    if (Math.abs(tY4 - tY5) === 1 && tX4 === tX5) return;
    if (Math.abs(tX4 - tX5) === 1 && Math.abs(tY4 - tY5) === 1) return;

    // move tail
    if (tX4 > tX5) tX5++;
    if (tX4 < tX5) tX5--;
    if (tY4 > tY5) tY5++;
    if (tY4 < tY5) tY5--;
}

function calculateTail6() {
    // check all directions
    if (tX5 === tX6 && tY5 === tY6) return;
    if (Math.abs(tX5 - tX6) === 1 && tY5 === tY6) return;
    if (Math.abs(tY5 - tY6) === 1 && tX5 === tX6) return;
    if (Math.abs(tX5 - tX6) === 1 && Math.abs(tY5 - tY6) === 1) return;

    // move tail
    if (tX5 > tX6) tX6++;
    if (tX5 < tX6) tX6--;
    if (tY5 > tY6) tY6++;
    if (tY5 < tY6) tY6--;
}

function calculateTail7() {
    // check all directions
    if (tX6 === tX7 && tY6 === tY7) return;
    if (Math.abs(tX6 - tX7) === 1 && tY6 === tY7) return;
    if (Math.abs(tY6 - tY7) === 1 && tX6 === tX7) return;
    if (Math.abs(tX6 - tX7) === 1 && Math.abs(tY6 - tY7) === 1) return;

    // move tail
    if (tX6 > tX7) tX7++;
    if (tX6 < tX7) tX7--;
    if (tY6 > tY7) tY7++;
    if (tY6 < tY7) tY7--;
}

function calculateTail8() {
    // check all directions
    if (tX7 === tX8 && tY7 === tY8) return;
    if (Math.abs(tX7 - tX8) === 1 && tY7 === tY8) return;
    if (Math.abs(tY7 - tY8) === 1 && tX7 === tX8) return;
    if (Math.abs(tX7 - tX8) === 1 && Math.abs(tY7 - tY8) === 1) return;

    // move tail
    if (tX7 > tX8) tX8++;
    if (tX7 < tX8) tX8--;
    if (tY7 > tY8) tY8++;
    if (tY7 < tY8) tY8--;
}

function calculateTail9() {
    // check all directions
    if (tX8 === tX9 && tY8 === tY9) return;
    if (Math.abs(tX8 - tX9) === 1 && tY8 === tY9) return;
    if (Math.abs(tY8 - tY9) === 1 && tX8 === tX9) return;
    if (Math.abs(tX8 - tX9) === 1 && Math.abs(tY8 - tY9) === 1) return;

    // move tail
    if (tX8 > tX9) tX9++;
    if (tX8 < tX9) tX9--;
    if (tY8 > tY9) tY9++;
    if (tY8 < tY9) tY9--;
}

function calculateTail() {
    calculateTail1();
    calculateTail2();
    calculateTail3();
    calculateTail4();
    calculateTail5();
    calculateTail6();
    calculateTail7();
    calculateTail8();
    calculateTail9();
}

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    data.split(/\r?\n/).forEach((line) => {
        if (line === '') return;
        const [direction, move] = line.split(' ');
        // console.log('\n\n', `== ${line} ==`)
        for (let i = 0; i < +move; i++) {
            switch (direction) {
                case 'R':
                    hX++;
                    break;
                case 'L':
                    hX--;
                    break;
                case 'U':
                    hY++;
                    break;
                case 'D':
                    hY--;
                    break;
            }
            calculateTail();
            positions.add(`${tX9},${tY9}`)
        }
        // // DEBUGGING
        // const matrix = [];
        // for (let j = -5; j < 10; j++) {
        //     const row = [];
        //     for (let k = -20; k < 20; k++) {
        //         if (hY === j && hX === k) row.push('H')
        //         else if (tY1 === j && tX1 === k) row.push('1')
        //         else if (tY2 === j && tX2 === k) row.push('2')
        //         else if (tY3 === j && tX3 === k) row.push('3')
        //         else if (tY4 === j && tX4 === k) row.push('4')
        //         else if (tY5 === j && tX5 === k) row.push('5')
        //         else if (tY6 === j && tX6 === k) row.push('6')
        //         else if (tY7 === j && tX7 === k) row.push('7')
        //         else if (tY8 === j && tX8 === k) row.push('8')
        //         else if (tY9 === j && tX9 === k) row.push('9')
        //         else if (j === 0 && k === 0) row.push('s')
        //         else row.push('.')                    
        //     }                
        //     matrix.push(row.join(''));
        // }
        // console.log(matrix.reverse().join('\n'), '\n\n');
        // // !DEBUGGING
    });
    console.log(`Part 1: ${positions.size}`)
});