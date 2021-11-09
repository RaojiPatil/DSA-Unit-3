
function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);
    console.log(array(arr, n));
}

function array(arr, n) {
    var es = 0;
    var os = 0;

    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            es += arr[i];
        } else if (arr[i] % 2 == 1) {
            os += arr[i];
        }
    }
    var out = 2 * es + 3 * os;
    return out;
}



if (process.env.USERNAME === "Admin") {
    runProgram('5\n1 2 3 4 5');
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