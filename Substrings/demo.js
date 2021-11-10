var a = [1, 2, 3];
var n = a.length;
var size = a.length;

function heapPermutation(a, n, size) {
    if (size == 1)
        return 1

    for (let i = 0; i < size; i++) {
        heapPermutation(a, size - 1, n);

        if (size % 2 == 1) {
            let temp = a[0];
            a[0] = a[size - 1];
            a[size - 1] = temp;
        } else {
            let temp = a[i];
            a[i] = a[size - 1];
            a[size - 1] = temp;
        }
    }
}

console.log(heapPermutation(a, a.length, a.length));