// **** Naive Solution ****
function maxSubArray(arr, num) {
    if (num > arr.length) {
        return null;
    }
    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max)
            max = temp;
    }
    return max;
}

function maxSubArray(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length)
        return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}
console.log(maxSubArray([1, 2, 5, 2, 8, 2, 5, 1], 5));