// var arr = [
//     ["a", "b"],
//     ["c", "d"],
//     ["e", "f"]
// ]

// var row = arr.length;
// var col = arr[0].length;

// for (var i = 0; i < row; i++) {
//     var d1 = 0;
//     for (var j = 0; j < col; j++) {
//         if ((arr[i][j] == "a") || (arr[i][j] == "e") || (arr[i][j] == "i") || (arr[i][j] == "o") || (arr[i][j] == "u")) {
//             d1++;
//         }
//     }

//     if (d1 > 0) {
//         console.log("Yes");
//     } else {
//         console.log("No");
//     }

// }




///





function runProgram(input) {
    var input = input.split("\n");
    var [n, m] = input[0].split(" ").map(Number);
    line = 1;
    var arr = [];

    for (var i = 0; i < n; i++) {
        arr.push(input[line++].split(" ").map(Number));

    }

    arrindex(arr);

}

function arrindex(arr) {

    var row = arr.length;
    var col = arr[0].length;

    for (var i = 0; i < row; i++) {
        var d1 = 0;
        for (var j = 0; j < col; j++) {
            if ((arr[i][j] == "a") || (arr[i][j] == "e") || (arr[i][j] == "i") || (arr[i][j] == "o") || (arr[i][j] == "u")) {
                d1++;
            }
        }

        if (d1 > 0) {
            console.log("Yes");
        } else {
            console.log("No");
        }

    }



}

if (process.env.USERNAME === "Admin") {
    runProgram('3 2\na b\nc d\ne f');
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