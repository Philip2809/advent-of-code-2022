// CrateMover 9000
const fs = require('fs');

const arrangmentlines = [];
let arragmentDone = false;
fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    const stacks = [];
    const stacksByHeight = [];
    const regex = /\d+/g;
    data.split(/\r?\n/).forEach(line => {
        if (!arragmentDone) {
            if (line === '') {
                arragmentDone = true;
                console.log(arrangmentlines);
                const last = arrangmentlines[arrangmentlines.length - 1];
                const numbers = last.split(' ').map(v => +v);
                const amoutOfStacks = Math.max(...numbers);
                arrangmentlines.forEach((line, index) => {
                    if (!line.includes('[')) return;
                    const array = [];
                    line.split(' ').forEach((v, index, arr) => {
                        if (v) array.push(v);
                        if (v === '' && arr[index + 1]) array.push(v);
                    });
                    stacksByHeight.push(array);
                });
                for (let i = 0; i < amoutOfStacks; i++) {
                    const a = [];
                    stacksByHeight.forEach((stack, index) => {
                        if (stack[i]) a.push(stack[i]);
                    });
                    stacks.push(a);
                }
            }
            else arrangmentlines.push(line);
        } else {
            const matches = line.match(regex);
            if (!matches) return;
            const numbers = line.match(regex).map(v => +v);
            const amount = numbers[0];
            const from = numbers[1];
            const to = numbers[2];
            for (let i = 0; i < amount; i++) {
                const create = stacks[from - 1].shift();
                stacks[to - 1].splice(0, 0, create);
            }
        }
    });
    let string = '';
    stacks.forEach((stack) => {
        string += (stack[0].match(/[A-Z]/g));
    });
    console.log(string);
});