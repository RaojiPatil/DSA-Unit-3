function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]
    var line = 1;

    var array = input[line++].split(" ").map(Number);
    var sum = input[line++];





    function subset(array, n, sum) {

        if (sum == 0)
            return true;
        if (n == 0)
            return false;

        if (array[n - 1] > sum)
            return subset(array, n - 1, sum);

        return subset(array, n - 1, sum) || (subset(array, n - 1, sum - array[n - 1]));
    }


    if (subset(array, n, sum) == true)
        console.log("yes");
    else
        console.log("no");


}

if (process.env.USERNAME === "Admin") {
    runProgram('9\n1 2 3 4 5 6 7 8 9\n5');
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