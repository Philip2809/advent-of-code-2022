const fs = require('fs');


function isVisable(tree, x, y) {
    let visable = {
        right: true,
        left: true,
        up: true,
        down: true
    };
    // right
    for (let iright = x + 1; iright < grid[y].length; iright++) {
        if (+grid[y][iright] >= +tree) visable.right = false;
    }
    // left
    for (let ileft = x -1; ileft >= 0; ileft--) {
        if (+grid[y][ileft] >= +tree) visable.left = false;
    }
    // up
    for (let iup = y - 1; iup >= 0; iup--) {
        if (+grid[iup][x] >= +tree) visable.up = false;
    }
    // down
    for (let idown = y + 1; idown < grid.length; idown++) {
        if (+grid[idown][x] >= +tree) visable.down = false;
    }
    if (visable.right || visable.left || visable.up || visable.down) return true;
    return false;
}

function getScore(tree, x, y) {
    let score = {
        right: 0,
        left: 0,
        up: 0,
        down: 0
    }
    let viewBlock = {
        right: false,
        left: false,
        up: false,
        down: false
    }
    // right
    for (let iright = x + 1; iright < grid[y].length; iright++) {
        if (viewBlock.right) continue;
        if (+grid[y][iright] >= +tree) viewBlock.right = true;
        score.right++;
    }
    // left
    for (let ileft = x -1; ileft >= 0; ileft--) {
        if (viewBlock.left) continue;
        if (+grid[y][ileft] >= +tree) viewBlock.left = true;
        score.left++;
    }
    // up
    for (let iup = y - 1; iup >= 0; iup--) {
        if (viewBlock.up) continue;
        if (+grid[iup][x] >= +tree) viewBlock.up = true;
        score.up++;
    }
    // down
    for (let idown = y + 1; idown < grid.length; idown++) {
        if (viewBlock.down) continue;
        if (+grid[idown][x] >= +tree) viewBlock.down = true;
        score.down++;
    }
    return score.right * score.left * score.up * score.down;
}


const grid = [];
let totalVisable = 0;
let bestScore = 0;
fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    data.split(/\r?\n/).forEach(line => {
        if (line === '') return;
        else grid.push(line.split(''));
    });
    grid.forEach((row, y) => {
        row.forEach((cell, x) => {
            if (x === 0 || x === row.length - 1 || y === 0 || y === grid.length - 1) {
                totalVisable++;
                return
            };;
            if (isVisable(+cell, +x, +y)) totalVisable++;
            const score = getScore(+cell, +x, +y);
            if (score > bestScore) bestScore = score;
        });
    });

    console.log(`Part 1: ${totalVisable}`)
    console.log(`Part 2: ${bestScore}`)
});