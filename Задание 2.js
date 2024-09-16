function Price(number) {
    if (number > 1000) {
        console.log("Данные неверны");
        return;
    }

    if (number <= 1) {
        console.log("Число не является простым");
        return;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            console.log("Число не является простым");
            return;
        }
    }

    console.log("Число является простым");
}

