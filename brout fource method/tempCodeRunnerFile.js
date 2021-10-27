
function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i <= text; i++) {
        var n = input[line++];
        var array = input[line++].split(" ").map(Number);
        console.log(array);


    }
}



if (process.env.USERNAME === "Admin") {
    runProgram('3\n3\n1 2 3\n4\n0 1 2 3\n2 3 6 10');
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