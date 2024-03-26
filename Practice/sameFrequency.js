function sameFrequency(num1, num2) {
    let strNum1 = num1.toString(),
        strNum2 = num2.toString();

    let counter1 = {},
        counter2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        counter1[strNum1[i]] = (counter1[strNum1[i]] ?? 0) + 1;
    }
    for (let i = 0; i < strNum2.length; i++) {
        counter2[strNum2[i]] = (counter2[strNum2[i]] ?? 0) + 1;
    }
    for (let key in counter1) {
        if (counter1[key] !== counter2[key])
            return false;
    }
    return true;
}

console.log(sameFrequency(91111, 11119));