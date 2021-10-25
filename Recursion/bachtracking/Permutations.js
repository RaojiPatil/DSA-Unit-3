let str = [1, 2, 3];
let n = str.length;
permute(str, 0, n - 1);

function permute(str, l, r) {
    if (l == r)
        console.log(str.join(" "));
    else {
        for (let i = l; i <= r; i++) {
            str = swap(str, l, i);
            permute(str, l + 1, r);
            str = swap(str, l, i);
        }
    }
}


function swap(a, i, j) {

    let temp = a[i]
    a[i] = a[j]
    a[j] = temp;
    return a;
}

