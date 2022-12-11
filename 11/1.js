const fs = require('fs');
const math = {
    '+': (a, b) => +a + +b,
    '-': (a, b) => +a - +b,
    '*': (a, b) => +a * +b,
    '/': (a, b) => +a / +b,
}

monkeys = [];

fs.readFile('input', 'utf8', (err, data) => {
    if (err) throw err;
    currentMonkey = null;
    data.split(/\r?\n/).forEach(line => {
        if (line === '') {
            if (currentMonkey !== null) {
                monkeys.push(currentMonkey);
                currentMonkey = null;
            }
            return;
        };
        if (line.startsWith('Monkey')) {
            currentMonkey = {
                name: +line.match(/\d+/),
                items: [],
                math: null,
                inspects: 0,
            };
            return;
        }
        if (line.includes('Starting items')) {
            const items = line.match(/\d+/g);
            currentMonkey.items = items.map(item => +item);
            return;
        }
        if (line.includes('Operation')) {
            const input = line.match(/= old ([*/\-+]) (old|\d+)/);
            currentMonkey.math = {
                operator: input[1],
                operand: input[2],
            };
            return;
        }
        if (line.includes('Test: divisible')) {
            currentMonkey.test = +line.match(/\d+/);
            return;
        }
        if (line.includes('If true')) {
            currentMonkey.ifTrue = +line.match(/\d+/);
            return;
        }
        if (line.includes('If false')) {
            currentMonkey.ifFalse = +line.match(/\d+/);
            return;
        }
    });
    monkeyBizzNizz();
});

const ROUNDS = 20;

function monkeyBizzNizz() {
    for (let round = 1; round <= ROUNDS; round++) {
        monkeys.forEach(monkey => {
            monkey.items.forEach(item => {
                monkey.inspects++;
                const newWorryLevel = math[monkey.math.operator](item, monkey.math.operand === 'old' ? item : monkey.math.operand);
                const relief = Math.floor(newWorryLevel / 3);
                monkey.items = monkey.items.filter(i => i !== item);
                monkeys[relief % monkey.test === 0 ? monkey.ifTrue : monkey.ifFalse].items.push(relief);
            });
        })
    }
    // find the two monkeys with the most inspects
    const sortedMonkeys = monkeys.sort((a, b) => b.inspects - a.inspects);
    const topTwo = sortedMonkeys.slice(0, 2);
    const total = topTwo[0].inspects * topTwo[1].inspects;
    console.log(`The level of monkey business after ${ROUNDS} rounds of stuff-slinging simian shenanigans is ${total}!`)
}