function runProgram(input) {
    var input = input.split("\n");

    var size = +input[0]
    var line = 1;

    for (var i = 0; i < size; i++) {
        var n = input[line++].split(" ").map(Number)
        console.log(find(n));
    }


    function find(n) {
        if (n == 0)
            return 0;
        else
            return ((n % 2) + 10 * find(parseInt(n / 2)));
    }


}

if (process.env.USERNAME === "Admin") {
    runProgram('2\n15\n1281');
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