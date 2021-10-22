function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]

    function fib(n) {
        if (n <= 1)
            return n;
        return fib(n - 1) + fib(n - 2);
    }

    console.log(fib(n))


}

if (process.env.USERNAME === "Admin") {
    runProgram('4');
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