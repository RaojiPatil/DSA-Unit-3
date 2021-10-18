// var arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [1, 5, 9, 8]
// ]

// var out = "";
// var row = arr.length;
// var cols = arr[0].length;
// var bottom = row - 1;
// var left = 0;
// var right = cols - 1;
// var count = 0;
// var top = 0;

// while (count < row * cols) {
//     for (i = top; i <= bottom && count < cols * row; i++) {
//         out = out + arr[i][left] + " ";
//         count++;
//     }
//     left++;
//     for (var i = left; i <= right && count < row * cols; i++) {
//         out = out + arr[bottom][i] + " ";
//         count++;
//     }
//     bottom--
//     for (var i = bottom; i >= top && count < cols * row; i--) {
//         out = out + arr[i][right] + " ";
//         count++;
//     }
//     right--
//     for (var i = right; i >= left && count < cols * row; i--) {
//         out = out + arr[top][i] + " ";
//         count++
//     }
//     top++
// }
// console.log(out);

//


function runProgram(input) {
    var input = input.split("\n");
    var [row, cols] = input[0].split(" ").map(Number);
    line = 1;
    var arr = [];

    for (var i = 0; i < row; i++) {
        arr.push(input[line++].split(" ").map(Number));

    }

    arrindex(arr, row, cols);

}

function arrindex(arr, row, cols) {

    var out = "";
    var row = arr.length;
    var cols = arr[0].length;
    var bottom = row - 1;
    var left = 0;
    var right = cols - 1;
    var count = 0;
    var top = 0;

    while (count < row * cols) {
        for (i = top; i <= bottom && count < cols * row; i++) {
            out = out + arr[i][left] + " ";
            count++;
        }
        left++;
        for (var i = left; i <= right && count < row * cols; i++) {
            out = out + arr[bottom][i] + " ";
            count++;
        }
        bottom--
        for (var i = bottom; i >= top && count < cols * row; i--) {
            out = out + arr[i][right] + " ";
            count++;
        }
        right--
        for (var i = right; i >= left && count < cols * row; i--) {
            out = out + arr[top][i] + " ";
            count++
        }
        top++
    }
    console.log(out);


}

if (process.env.USERNAME === "Admin") {
    runProgram('3 3\n1 2 3\n4 5 6\n7 8 9');
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}