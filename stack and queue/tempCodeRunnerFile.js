
var me = [];

var out = "";
var out1 = "";

function smallernumber(arr) {
    let n = arr.length;

    for (var i = 0; i < n; i++) {

        while ((me.length != 0) && (me[me.length - 1] >= arr[i])) {
            me.pop();
        }
        if (me.length == 0) {
            out = out + arr[i] + " ";
        } else {
            out = out + (me[me.length - 1] + " ");
        }
        me.push(arr[i]);
    }

    console.log(out);

}


function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]
    var line = 1;
    var arr = input[line++].split(" ").map(Number);

    smallernumber(arr);

}

if (process.env.USERNAME === "Admin") {
    runProgram('10\n39 27 11 4 24 32 32 1');
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