const fs = require('fs');

const Elves = [];
let currentElfCalories = 0;
fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    data.split(/\r?\n/).forEach(line => {
        if (line === '') {
            Elves.push(currentElfCalories);
            currentElfCalories = 0;
        } else currentElfCalories += +line;
    });
    Elves.sort((a, b) => b - a)
    console.log(Elves[0]);
    console.log(Elves[0] + Elves[1] + Elves[2]);
});