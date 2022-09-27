fibonacci = (n) ->
    if n <= 0
        return null;
    fibs = new Array(n + 2);
    fibs[0] = 0;
    fibs[1] = 1;
    for i in [2..n]
        fibs[i] = fibs[i - 1] + fibs[i - 2];
    return fibs[n];