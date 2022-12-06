const fs = require('fs');

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    let part1Done = false;
    let part2Done = false;
    data.split(/\r?\n/).forEach(line => {
        if (line === '') return;
        for (let i = 0; i < line.length; i++) {
            const part1 = line.slice(i, i + 4);
            const part2 = line.slice(i, i + 14);
            if (part1.length === new Set(part1).size && !part1Done) {
                console.log(`Part 1: ${i + 4}`);
                part1Done = true;
            }
            if (part2.length === new Set(part2).size && !part2Done) {
                console.log(`Part 2: ${i + 14}`)
                part2Done = true;
            }
            
        }
    });
});