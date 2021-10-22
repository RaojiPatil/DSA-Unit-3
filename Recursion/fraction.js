function runProgram(input) {
    var n = Number(input)



    // function f(n) {

    //     if (n == 0 || n == 1)
    //         return 1;

    //     else
    //         return n * f(n - 1);

    // }

    // console.log(f(n));

    //2

    function f(n) {
        if (n == 1)
            return 0;
        return Math.log(n) + f(n - 1);
    }
    console.log(f(n).toFixed(4));
}


if (process.env.USERNAME === "Admin") {
    runProgram(3);
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