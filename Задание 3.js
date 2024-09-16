function example(x) {
    return function(y) {
        return x + y;
    };
}

// Пример 
const add5 = example(5);
const result = add5(10);
console.log(result);  // Вывод: 15