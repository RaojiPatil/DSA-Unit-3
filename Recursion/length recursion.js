function runProgram(input) {
    var str = input.split(" ");


    console.log(recursionLength(str.join("")));
}


function recursionLength(str) {
    if (str == "")
        return 0;
    else
        return recursionLength(str.substring(1)) + 1;
}


if (process.env.USERNAME === "Admin") {
    runProgram('masaischool');
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