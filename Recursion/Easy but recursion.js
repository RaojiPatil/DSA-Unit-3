function findSum(arr, N) {
    if (N <= 0)
        return 0;
    return (findSum(arr, N - 1) + arr[N - 1]);
}




function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var N = input[line++];
        var arr = input[line++].split(" ").map(Number);
        console.log(findSum(arr, N));

    }
}


if (process.env.USERNAME === "Admin") {
    runProgram('');
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