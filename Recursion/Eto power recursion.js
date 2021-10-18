function runProgram(input) {
    input = input.trim().split("\n");
    var [x, n] = input[0].trim().split(" ").map(Number);
    console.log(EtopowerX(x, n).toFixed(4));



}




function EtopowerX(x, n) {
    p = 1, f = 1;
    var r;
    if (n == 0) {
        return 1;
    }
    r = EtopowerX(x, n - 1);
    p = p * x;
    f = f * n;
    return (r + p / f);
}







if (process.env.USERNAME === "Admin") {
    runProgram(`4 2`);
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