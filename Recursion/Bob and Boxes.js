var n = 5;

function ff(n) {
    if (n < 0)
        return 0;
    if (n == 0)
        return 1
    return ff(n - 1) + ff(n - 3) + ff(n + 5);

}
console.log(ff(n));