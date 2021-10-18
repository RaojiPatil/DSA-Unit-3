var n = 3;
var m = 2;
// N denotes rows, M denotes columns
var arr = [
    [1, 2],
    [3, 4],
    [5, 6]
]

for (var i = 0; i < n; i++) {
    var d1 = 0;
    for (var j = 0; j < m; j++) {
        d1 = d1 + arr[i][j];

    }
    console.log(d1);
}