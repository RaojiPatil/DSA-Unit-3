function runProgram(input) {
    var input = input.split("\n");

    var size = +input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);


    var n = arr.length;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < (n - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    console.log(arr.join(" "));

}

if (process.env.USERNAME === "Admin") {
    runProgram('5\n4 3 6 0 8');
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