// **** Naive Solution ****
function search(arr, val) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

function search(arr, val) {
    let min = 0,
        max = arr.length - 1;
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(search([0, 1, 2, 3, 4, 5, 6, 7], 6));