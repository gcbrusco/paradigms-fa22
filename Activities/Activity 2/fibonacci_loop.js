function fibonacci(n) {
    let fibs = new Array(n + 2);
    let i = 0;
    fibs[0] = 0;
    fibs[1] = 1;
    for (i = 2; i <= n; i++) {
        fibs[i] = fibs[i - 1] + fibs[i - 2];
    }
    return fibs[n];
}