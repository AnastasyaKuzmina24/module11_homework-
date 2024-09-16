const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};

// Пример
const x = 2;
const n = 3;
const result = power(x, n);
console.log(`${x} в степени ${n} равно ${result}`);