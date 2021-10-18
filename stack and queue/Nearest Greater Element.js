var S = [];

var out = "";

function greaternumber(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {

        while ((S.length != 0) && (S[S.length - 1] >= arr[i])) {
            S.pop();
        }
        if (S.length != 0) {
            out = out + ("-1") + " ";
        } else {
            out = out + (S[S.length - 1] + " ");
        }
        S.push(arr[i]);
    }
    console.log(out);

}


function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]
    var line = 1;
    for (var i = 0; i < n; i++) {
        var size = input[line++];
        var arr = input[line++].split(" ").map(Number);
    }
    greaternumber(arr);


}

if (process.env.USERNAME === "Admin") {
    runProgram('1\n5\n5 4 1 3 2');
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
//

var arr = [5, 4, 1, 3, 2];
var out = "";

for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < i + 1; j++) {
        if (arr[i] > arr[j]) {
            out = out + arr[i - 1] + " ";
        }
    }
}
console.log(out);