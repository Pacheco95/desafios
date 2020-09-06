function divisors(i) {
    if (i % 3 === 0 && i % 10 == 0) {
        return i;
    }

    return divisors(i + 1)
}

console.log(divisors(1))
