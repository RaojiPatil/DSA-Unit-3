function runProgram(input) {
    var n = Number(input)



    function f(n) {

        if (n == 0 || n == 1)
            return 1;

        else
            return n * f(n - 1);
    }

    console.log(f(n));


}


if (process.env.USERNAME === "Admin") {
    runProgram(5);
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