function runProgram(input) {
    //Enter code here
    input = input.trim().split("\n")
    var testCases = +input[0]

    var line = 1
    var arr = []

    for (var i = 0; i < testCases; i++) {
        var a = input[line++].trim().split(" ").map(Number)
        arr.push(a)
    }
    NewYearCelebration(arr, testCases)
}

function NewYearCelebration(arr, testCases) {
    // console.log(arr)
    var stack = []
    var queue = []

    for (var i = 0; i < testCases; i++) {

        if (arr[i][0] == 1) {
            queue.push(arr[i][1])
        } else if (arr[i][0] == 2) {
            stack.push(arr[i][1])
        } else if (arr[i][0] == 3) {
            if (queue.length != 0)
                console.log(queue[0])
            else
                console.log("-1")
        } else if (arr[i][0] == 4) {
            if (stack.length != 0)
                console.log(stack[stack.length - 1])
            else
                console.log("-1")
        } else {
            var Z = queue.shift()
            stack.push(Z)
        }

    }
    // console.log(queue)
    // console.log(stack)



}
if (process.env.USERNAME == "Admin") {
    runProgram(`7\n1 4\n2 3\n1 2\n3\n4\n5\n4`);
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