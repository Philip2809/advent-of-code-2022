const fs = require('fs');

let CPUregister = 1;
let cycle = 1;
const CRT = [[], [], [], [], [], []]
const cpuRegisterAtCycle = {};
fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    data.split(/\r?\n/).forEach(line => {
        if (line === '') return;
        const [instruction, value] = line.split(' ');
        cpuRegisterAtCycle[cycle] = CPUregister;
        drawCRT();
        if (instruction === 'noop') {
            cycle += 1;
        }
        if (instruction === 'addx') {
            cycle += 1;
            cpuRegisterAtCycle[cycle] = CPUregister;
            drawCRT();
            cycle += 1;
            CPUregister += +value;
        }
    });
    const part1 = cpuRegisterAtCycle[20] * 20 + cpuRegisterAtCycle[60] * 60 + cpuRegisterAtCycle[100] * 100 + cpuRegisterAtCycle[140] * 140 + cpuRegisterAtCycle[180] * 180 + cpuRegisterAtCycle[220] * 220;
    console.log(`Part 1: ${part1}`);
    console.log(`Part 2:`);
    CRT.forEach(row => console.log(row.join('')));
});

function drawCRT() {
    const rowNum = Math.ceil(cycle / 40);
    const row = CRT[rowNum - 1];
    let colNum = (cycle - 1) % 40;

    row[colNum] = '.'
    const sprite = Array(40).fill('.');
    sprite[CPUregister] = '#';
    sprite[CPUregister - 1] = '#';
    sprite[CPUregister + 1] = '#';
    if (CPUregister === colNum || CPUregister + 1 === colNum || CPUregister - 1 === colNum) {
        row[colNum] = '#';
    }
}