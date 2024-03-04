function addUpTo1(n){
    let total = 0;
    for(let i=0;i<=n;i++)
        total += i;
    return total;
}

function addUpTo(n){
    return n * (n+1) / 2;
}

t1 =performance.now();
console.log(addUpTo(3));
t2 = performance.now();
console.log((t2-t1)/1000);