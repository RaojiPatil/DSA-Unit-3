function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]

    var line = 1
    var arr = []

    for (var i = 0; i < testCases; i++) {
        var a = input[line++].trim().split(" ").map(String)
        arr.push(a)
    }
    BuyTicket(arr, testCases)
}

function BuyTicket(arr, testCases) {

    var queue = []
    for (var i = 0; i < testCases; i++) {
        if (arr[i][0] == "E") {
            queue.push(arr[i][1])
            console.log(queue.length)
        } else {
            if (queue.length != 0)
                console.log(queue.shift(), queue.length)
            else
                console.log("-1", 0)
        }
    }
}


if (process.env.USERNAME == "Admin") {
    runProgram(`5\nE 2\nD\nD\nE 3\nD`);
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