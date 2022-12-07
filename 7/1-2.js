const fs = require('fs');

const totalSpace = 70000000;
const spaceForUpdate = 30000000;

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    let currentDir = [];
    let currentSize = 0;

    const dirs = {
        '/': {}
    };
    let temp = dirs;
    data.split(/\r?\n/).forEach(line => {
        if (line === '') return;
        if (line.startsWith('$ cd')) {
            const nextDir =  line.split(' ')[2];
            if (nextDir === '..') currentDir.pop();
            else {
                currentDir.push(nextDir);
                temp = dirs;
                currentDir.forEach((dir, i) => {
                    if (!temp[dir]) temp[dir] = {};
                    temp = temp[dir];
                    if (!temp['size']) temp['size'] = 0;
                });
            }
            return;
        }
        if (line === '$ ls') {
            currentSize = 0;
            return;
        }
        if (line.match(/(\d+) (.+)/)) {
            temp.size += +line.match(/(\d+) (.+)/)[1];
        }
    });

    
    const addSize = (dir) => {
        Object.entries(dir).forEach(([key, value]) => {
            if (key === 'size') return;
            addSize(value);
            dir.size += value.size;
        });
    };
    addSize(dirs['/']);

    const freeSpace = totalSpace - dirs['/'].size;
    const neededSpace = spaceForUpdate - freeSpace;

    let total1 = 0;
    let bestChoice; // part 2
    const getDirs = (dir) => {
        Object.entries(dir).forEach(([key, value]) => {
            if (key === 'size') return;
            if (value.size <= 100000) total1 += value.size;
            if (value.size >= neededSpace) if (!bestChoice || value.size < bestChoice.size) bestChoice = value;
            getDirs(value);
        });
    };
    getDirs(dirs['/'])
    console.log(`Part 1: ${total1}`)
    console.log(`Part 2: ${bestChoice.size}`)
});