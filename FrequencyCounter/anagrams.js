function validAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    let counter1 = {};
    let counter2 = {};
    for (let char of s1) {
        counter1[char] = (counter1[char] ?? 0) + 1;
    }
    // console.log(counter1)
    for (let char of s2) {
        counter2[char] = (counter2[char] ?? 0) + 1;
    }
    // console.log(counter2)
    for (let i in counter1){
        if (counter1[i] !== counter2[i])
            return false;
    }
    return true;
}


console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram("rat", "car")); // false)) // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('qwerty', 'qeywrt')); // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true
