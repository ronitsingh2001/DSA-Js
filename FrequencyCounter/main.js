// ** NAIVE SOLUTION **
// function same(a1, a2) {
//     if (a1.length !== a2.length)
//         return false;
//     for (let i = 0; i < a1.length; i++) {
//         let correctIndex = a2.indexOf(a1[i] ** 2);
//         if(correctIndex === -1)
//             return false;
//         a2.splice(correctIndex,1);
//     }
//     return true;
// }

function same(a1, a2) {
    if (a1.length !== a2.length)
        return false;
    let counter1 = {};
    let counter2 = {};
    for (let val of a1) {
        counter1[val] = (counter1[val] ?? 0 ) + 1;
    }
    for (let val of a2) {
        counter2[val] = (counter2[val] ?? 0) + 1;
    }
    for (let key in counter1) {
        if(!(key ** 2 in counter2)){
            return false;
        }
        if(counter2[key ** 2] !== counter1[key]){
            return false;
        }
    }
    return true
}

console.log(same([1, 2, 3, 1], [1, 1, 9, 4]));