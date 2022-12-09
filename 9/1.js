const fs = require('fs');

let hX = 0;
let hY = 0;
let tX = 0;
let tY = 0;
const positions = new Set();

function calculateTail() {
    // check all directions
    if (hX === tX && hY === tY) return;
    if (Math.abs(hX - tX) === 1 && hY === tY) return;
    if (Math.abs(hY - tY) === 1 && hX === tX) return;
    if (Math.abs(hX - tX) === 1 && Math.abs(hY - tY) === 1) return;

    // move tail
    if (hX > tX) tX++;
    if (hX < tX) tX--;
    if (hY > tY) tY++;
    if (hY < tY) tY--;
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
            positions.add(`${tX},${tY}`);
            // DEBUGGING
            // const matrix = [];
            // for (let j = 0; j < 5; j++) {
            //     const row = [];
            //     for (let k = 0; k < 6; k++) {
            //         if (hY === j && hX === k) row.push('H')
            //         else if (tY === j && tX === k) row.push('T')
            //         else if (j === 0 && k === 0) row.push('s')
            //         else row.push('.')                    
            //     }                
            //     matrix.push(row.join(''));
            // }
            // console.log(matrix.reverse().join('\n'), '\n\n');
            // !DEBUGGING
        }
    });
    console.log(`Part 1: ${positions.size}`)
});