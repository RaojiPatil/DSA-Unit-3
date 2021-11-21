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

//


var me = [];

var out = "";
var out1 = 0;

function smallernumber(arr) {
    let n = arr.length;

    for (var i = 0; i < n; i++) {

        while ((me.length != 0) && (me[me.length - 1] >= arr[i])) {
            me.pop();
        }
        if (me.length == 0) {
            out = out + arr[i + 1] + " ";
        } else {
            out1 = out1 + (me[me.length - 1] + " ");
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


function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var n = input[line++];
        var arr = input[line++].trim().split(" ").map(Number);

        console.log(printNGE(arr, n));
    }
}



function printNGE(arr, n) {
    var next = "";
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            if (arr[i] < arr[j]) {
                next = next + arr[j] + " ";
                break
            } else {
                next = next + "-1" + " ";
            }
        }

    }
    console.log(next);

}




if (process.env.USERNAME === "Admin") {
    runProgram('1\n4\n1 3 2 4');
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


var arr = [1, 3, 2, 4];
var n = arr.length;
var s = [];

var a = "";

function printNGE(arr, n) {


    s.push(arr[0]);

    for (var i = 1; i < n; i++) {

        if (s.length == 0) {
            s.push(arr[i]);
            continue;
        }


        while (s.length == 0 == false &&
            s[s.length - 1] < arr[i]) {
            a = a + arr[i] + " ";
            s.pop();
        }

        s.push(arr[i]);
    }

    while (s.length != 0) {
        a = a + (-1) + " ";
        s.pop();
    }
    console.log(a);
}


printNGE(arr, n);

//



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