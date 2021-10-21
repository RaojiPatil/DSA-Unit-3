function runProgram(input) {
    let [x, y] = input.trim().split(" ").map(Number);
    console.log(powerOf(x, y));
}

function powerOf(x, y) {

    if (y == 0)
        return 1;
    return x * powerOf(x, y - 1);
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


// Driver Code

let x = 2;
let y = 4;

function power(x, y) {

    return parseInt(Math.pow(x, y));
}

console.log(power(x, y));