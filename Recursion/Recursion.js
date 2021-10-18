function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]

    function fib(n) {
        if (n <= 1)
            return n;
        return fib(n - 1) + fib(n - 2);
    }

    console.log(fib(n))


}

if (process.env.USERNAME === "Admin") {
    runProgram('4');
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


let n = 4;

function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(n))

// Sum with Recursion Again

var arr = [1, 5, 2];

var out = 0;

for (var i = 0; i < arr.length; i++) {
    out = out + arr[i] - arr[i + 1];
    console.log(out);
}

//

let A = [3, 5, 6, 1, 8];
let N = A.length - 1;

function findSum(A, N) {
    if (N <= 0)
        return 0;
    return (findSum(A, N - 1) + A[N - 1]);
}
console.log(findSum(A, N));








function runProgram(input) {
    var input = input.split("\n");
    var text = +input[0];
    var line = 1;
    for (var i = 1; i <= text; i++) {
        var N = input[line++];
        var A = input[line++].split(" ").map(Number);
        findSum(A);
    }


}


function findSum(A) {
    let N = A.length - 1;
    if (N <= 0)
        return 0;
    return (A, N - 1) + A[N - 1];
}
console.log(findSum(A, N));


if (process.env.USERNAME === "Admin") {
    runProgram('2\n3\n1 5 2\n5\n3 5 6 1 8');
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


// let A = [3, 5, 6, 1, 8];
let N = A.length - 1;

function allsum(A, N) {
    if (N <= 0)
        return 0;
    return (allsum(A, N - 1) + A[N - 1]);
}
console.log(allsum(A, N));



function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var N = input[line++];
        var A = input[line++].split(" ").map(Number);
        allsum(A, N)

    }



}

if (process.env.USERNAME === "Admin") {
    runProgram('2\n3\n1 5 2\n5\n3 5 6 5 8');
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


var n = 4;
var count = 0;
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
        if (i + j == n) {
            count++;
        }
    }

}
console.log(count);

//

var n = 4;

function countstep(n) {
    if (n == 1 || n == 0)
        return 1;
    else if (n == 2)
        return 2;

    else
        return countstep(n - 3) + countstep(n - 2) +
            countstep(n - 1);
}


console.log(countstep(n));


//
function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]


    function countstep(n) {
        if (n == 1 || n == 0)
            return 1;
        else if (n == 2)
            return 2;

        else {
            return countstep(n - 3) + countstep(n - 2) +
                countstep(n - 1);
        }
    }


    console.log(countstep(n));
}

if (process.env.USERNAME === "Admin") {
    runProgram('4');
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