// var arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// var cols = arr[0].length;
// var row = arr.length;


// for (var i = 0; i < row; i++) {
//     var d1 = 0;
//     for (var j = 0; j < cols; j++) {
//         if (arr[i][j] % 2 == 1) {
//             d1 = d1 + arr[i][j];
//         }
//     }

//     console.log(d1);
// }



function runProgram(input) {
    var input = input.split("\n");
    var [row, cols] = input[0].split(" ").map(Number);
    line = 1;
    var arr = [];

    for (var i = 0; i < row; i++) {
        arr.push(input[line++].split(" ").map(Number));

    }

    arrindex(arr);

}

function arrindex(arr) {
    var cols = arr[0].length;
    var row = arr.length;


    for (var i = 0; i < row; i++) {
        var d1 = 0;
        for (var j = 0; j < cols; j++) {
            if (arr[i][j] % 2 == 1) {
                d1 = d1 + arr[i][j];
            }
        }

        console.log(d1);
    }

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