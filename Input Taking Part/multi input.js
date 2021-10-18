function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 1; i <= text; i++) {
        var size = input[line++];
        var arr = input[line++].split(" ").map(Number);
        console.log(size);
        console.log(arr);
    }
}

if (process.env.USERNAME === "Admin") {
    runProgram('2\n5\n4 3 6 7 8\n6\n5 8 7 9 6 ');
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