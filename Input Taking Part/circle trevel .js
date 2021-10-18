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
    var r = 0;
    var c = 0;

    var last_row = arr.length - 1;
    var last_col = arr[0].length - 1;
    var out = [];

    while (r <= last_row && c <= last_col) {
        for (var i = last_row; i >= r; i--) {
            out.push(arr[i][c]);
        }
        c++;
        for (var i = c; i <= last_col; i++) {
            out.push(arr[r][i]);
        }
        r++;
        for (var i = r; i <= last_row; i++) {
            out.push(arr[i][last_col]);
        }
        last_col--;
        for (var i = last_col; i >= c; i--) {
            out.push(arr[last_row][i]);
        }
        break;
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