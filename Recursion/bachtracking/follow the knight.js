//pending

var C = 0

var N = 3

function f(i, j, N) {

    if (N == 0) {

        if ({ i, j } === undefined) {
            C = C + 1
            Obj.insert({ i, j })
            return
        }
    }

    if (i + 2 < 10 && j + 1 < 10 && f[i + 2][j + 1] == 0) {
        f[i + 2][j + 1] = 1
        F(i + 2, j + 1, N - 1)
        f[i + 2][j + 1] = 0
    }

    console.log(f(C))

}