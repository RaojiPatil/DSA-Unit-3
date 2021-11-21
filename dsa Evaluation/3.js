function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    var n = input[line++].trim().split(" ").map(Number);
    console.log(noofway(n));
}

function noofway(n) {
    var DP = [];
    DP.length = 10;
    DP.fill(0);

    // Base cases
    DP[0] = DP[1] = DP[2] = 1;
    DP[3] = 2;

    for (var i = 4; i <= n; i++)
        DP[i] = DP[i - 1] + DP[i - 3] +
        DP[i - 4];

    return DP[n];
}


if (process.env.USERNAME === "Admin") {
    runProgram('2\n5');
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

//

var arr = [4, 2, 1, 3, 7];
var count = 1;
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < i + 1; j++) {
        if (arr[i] > arr[j]) {
            count++;
            break;
        }
    }
}
console.log(count);