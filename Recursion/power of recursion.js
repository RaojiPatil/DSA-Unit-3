function runProgram(input) {
    let [x, y] = input.trim().split(" ").map(Number);
    console.log(powerOf(x, y));
}

function powerOf(x, y) {

    if (y == 0)
        return 1;

    var out = powerOf(x, (y / 2));

    if (y % 2 == 0)
        return out * out;
    else {
        if (y > 0)
            return x * out * out;
        else
            return (out * out) / x;
    }
}

if (process.env.USERNAME === "Admin") {
    runProgram(`2 4`);
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