function runProgram(input) {
    var input = input.split("\n");

    var size = +input[0]
    var line = 1;

    for (var i = 0; i < size; i++) {
        var n = input[line++].split(" ").map(Number)
        console.log(toBinary(n));
    }

    function toBinary(n) {
        if (n === 1) {
            return '1';
        }
        if (n === 0) {
            return '0';
        }
        return toBinary(Math.floor(n / 2)) + (n % 2);
    }




}

if (process.env.USERNAME === "Admin") {
    runProgram('2\n15\n128');
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

var a = 1001;
var b = parseInt(a, 2);
console.log(b);

//

var n = 7;

function toBinary(n) {
    if (n === 1) {
        return '1';
    }
    if (n === 0) {
        return '0';
    }
    return toBinary(Math.floor(n / 2)) + (n % 2);
}
console.log(toBinary(n));

//