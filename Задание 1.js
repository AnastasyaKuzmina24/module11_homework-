function count(array) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
    let otherCount = 0;

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            if (array[i] === 0) {
                zeroCount++;
            } else if (array[i] % 2 === 0) {
                evenCount++;
            } else {
                oddCount++;
            }
        } else {
            otherCount++;
        }
    }

    console.log("Количество чётных элементов: " + evenCount);
    console.log("Количество нечётных элементов: " + oddCount);
    console.log("Количество нулевых элементов: " + zeroCount);
    console.log("Количество других элементов: " + otherCount);
}

// Пример 
let array = [1, 2, 3, 4, 5, 0, 6, null, "a", 0, 8, 9, 10];
count(array);