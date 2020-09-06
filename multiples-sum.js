function isMultiple(i) {
    return i % 3 === 0 || i % 10 === 0
}

let sum = 0;

for (let i = 0; i < 1000; i++) {
    if (isMultiple(i)) {
        sum += i;
    }
}

console.log('Soma', sum)
