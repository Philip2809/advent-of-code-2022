const fs = require('fs');

function genArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
}

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    let total1 = 0;
    let total2 = 0;
    data.split(/\r?\n/).forEach(line => {
        const data = line.split(',');
        if (data.length !== 2) return;
        const elf1 = genArray(+data[0].split('-')[0], +data[0].split('-')[1]);
        const elf2 = genArray(+data[1].split('-')[0], +data[1].split('-')[1]);

        // check if array fully contains another array
        const contains = (arr1, arr2) => arr2.every(v => arr1.includes(v));
        if (contains(elf1, elf2) || contains(elf2, elf1)) total1++;

        // check if the arrays overlap at all
        if (elf1.some(v => elf2.includes(v))) total2++;
    });
    console.log(`Part 1: ${total1}`);
    console.log(`Part 2: ${total2}`);
});