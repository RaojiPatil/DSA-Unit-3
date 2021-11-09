var arr = [1, 2, 3, 4, 5];
var sum1 = 0;
var sum2 = 0;
var count1 = 0;
var count2 = 0;

for (var i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        count1++;
        sum1 = sum1 + arr[i];
    } else if (arr[i] % 2 == 1) {
        count2++;
        sum2 = sum2 + arr[i];
    }
}

console.log(sum1)

var a = (count1 * sum1);
var b = (count2 * sum2);
var c = (a + b);
console.log(c);


function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);

}








if (process.env.USERNAME === "Admin") {
    runProgram('');
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

function runProgram(input) {
    var input = input.split("\n");

    var size = +input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);


    var sum1 = 0;
    var sum2 = 0;
    var count1 = 0;
    var count2 = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            count1++;
            sum1 = sum1 + arr[i];
        } else if (arr[i] % 2 == 1) {
            count2++;
            sum2 = sum2 + arr[i];
        }
    }


    var a = (count1 * sum1);
    var b = (count2 * sum2);
    var c = (a + b);
    console.log(c);
}




if (process.env.USERNAME === "Admin") {
    runProgram('5\n1 2 3 4 5');
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


function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);
    console.log(array(arr, n));
}

function array(arr, n) {
    var es = 0;
    var os = 0;

    for (var i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            es += arr[i];
        } else if (arr[i] % 2 == 1) {
            os += arr[i];
        }
    }
    var out = 2 * es + 3 * os;
    return out;
}



if (process.env.USERNAME === "Admin") {
    runProgram('5\n1 2 3 4 5');
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