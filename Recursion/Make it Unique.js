function runProgram(input) {
    var str = input.split("");


    var n = str.length;
    var out = "";
    var s = new Set();
    for (var i = 0; i < n; i++)
        s.add(str[i]);
    for (const v of s) {
        out = out + v + "";
    }
    console.log(out.trim());

}


if (process.env.USERNAME === "Admin") {
    runProgram('aaaabbbbbcccccdddd');
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