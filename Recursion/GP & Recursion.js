function runProgram(input) {
    let [n, r] = input.trim().split(" ").map(Number);
    console.log(gp(n, r, 1));
}



function gp(n, r, sum) {

    if (n < 1) {
        return sum.toFixed(4);
    }

    sum = sum + (1 / (r ** n));
    return gp(n - 1, r, sum);

}

if (process.env.USERNAME === "Admin") {
    runProgram(`1 1`);
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