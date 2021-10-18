function runProgram(input) {
    var input = input.trim().split("\n");
    var a = +input[0];
    var line = 1;
    for (var i = 0; i < a; i++) {
        var [row, cols] = input[line].split(" ").map(Number);
        line++;
        var arr = [];
        for (var j = 0; j < row; j++) {
            arr.push(input[line].trim().split(" ").map(Number));
            line++;

        }

        nTraversal(arr);


    }

}




function nTraversal(arr) {
    var N = arr.length;
    var out = "";

    for (var i = 0; i < N - 1; i++) {
        out = out + arr[0][i] + " ";
    }

    for (var i = 0; i < N; i++) {
        out = out + arr[i][N - i - 1] + " ";
    }
    for (var i = 1; i < N; i++) {
        out = out + arr[N - 1][i] + " ";
    }

    console.log(out);

}


if (process.env.USERNAME === "Admin") {
    runProgram('1\n3 3\n1 2 3\n4 5 6\n7 8 9');
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