
function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 1; i <= text; i++) {
        var N = input[line++];
        var A = input[line++].split(" ").map(Number);
        allsum(A, N)

    }

    function allsum(A, N) {

        if (N <= 0)
            return 0;
        return (allsum(A, N - 1) + A[N - 1]);
    }
    console.log(allsum(A, N));

}

if (process.env.USERNAME === "Admin") {
    runProgram('2\n3\n1 5 2\n5\n3 5 6 5 8');
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