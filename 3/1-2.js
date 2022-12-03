const fs = require('fs');
const smallCharStart = 'a'.charCodeAt(0) - 1;
const bigCharStart = 'A'.charCodeAt(0) - 27;

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    let part1Total = 0;
    let part2Total = 0;
    let group = [];
    data.split(/\r?\n/).forEach(line => {
        const part1 = line.slice(0, line.length / 2);
        const part2 = line.slice(line.length / 2);
        for (var i = 0; i < part1.length; i++) {
            const char = part1[i];
            if (part2.includes(char)) {
                part1Total += char.charCodeAt(0) - (char === char.toLowerCase() ? smallCharStart : bigCharStart);
                break;
            }
        }
        group.push(line);
        if (group.length === 3) {
            const common = group[0].split('').filter(char => group[1].includes(char) && group[2].includes(char))[0];
            part2Total += common.charCodeAt(0) - (common === common.toLowerCase() ? smallCharStart : bigCharStart);
            group = [];
        }
    });
    console.log(`Part 1: ${part1Total}`);
    console.log(`Part 2: ${part2Total}`);
});