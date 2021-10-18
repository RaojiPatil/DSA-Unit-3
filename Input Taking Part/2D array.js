// function runProgram(input) {
//     var input = input.split("\n");
//     var [n, m] = input[0].split(" ").map(Number);
//     line = 1;
//     var arr = [];

//     for (var i = 0; i < n; i++) {
//         arr.push(input[line++].split(" ").map(Number));

//     }

//     arrindex(arr, n, m);

// }

// function arrindex(arr, n, m) {

//     for (var i = 0; i < n; i++) {
//         var d1 = "";
//         for (var j = 0; j < m; j++) {
//             d1 = d1 + arr[i][j] + " ";

//         }
//         console.log(d1);
//     }


// }

// if (process.env.USERNAME === "Admin") {
//     runProgram('3 2\n1 2\n3 4\n5 6');
// } else {
//     process.stdin.resume();
//     process.stdin.setEncoding("ascii");
//     let read = "";
//     process.stdin.on("data", function(input) {
//         read += input;
//     });
//     process.stdin.on("end", function() {
//         read = read.replace(/\n$/, "");
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//     });
//     process.on("SIGINT", function() {
//         read = read.replace(/\n$/, "");
//         runProgram(read);
//         process.exit(0);
//     });
// }

//



function runProgram(input) {
    var input = input.split("\n");
    var [n, m] = input[0].split(" ").map(Number);
    line = 1;
    var arr = [];

    for (var i = 0; i < n; i++) {
        arr.push(input[line++].split(" ").map(Number));

    }

    arrindex(arr, n, m);

}

function arrindex(arr, n, m) {

    for (var i = 0; i < n; i++) {
        var d1 = 0;
        for (var j = 0; j < m; j++) {
            d1 = d1 + arr[i][j];

        }
        console.log(d1);
    }


}

if (process.env.USERNAME === "Admin") {
    runProgram('3 2\n1 2\n3 4\n5 6');
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


//