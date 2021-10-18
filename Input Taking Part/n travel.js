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
    var out = [];

    for (var i = arr.length - 1; i >= 1; i--) {
        out.push(arr[i][0]);
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i == j) {
                out.push(arr[i][j]);
            }
        }
    }

    for (var i = arr.length - 2; i >= 0; i--) {
        out.push(arr[i][arr.length - 1]);
    }
    console.log(out.join(" "));


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