function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var n = input[line++];
        var array = input[line++].trim().split(" ").map(Number);
        console.log(twice(array, n));
    }
}


function twice(array, arr_size) {

    let res = array[0];
    for (let i = 1; i < arr_size; i++)
        res = res ^ array[i];

    return res;
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

//


let arr = [1, 2, 1, 2, 3];
let n = arr.length

function twice(arr, arr_size) {

    let res = arr[0];
    for (let i = 1; i < arr_size; i++)
        res = res ^ arr[i];

    return res;
}


console.log(twice(arrr, n));

//


var arr = [2, 4];
var n = 2;

function sub(arr, n) {
    let out = 0;

    for (var i = 0; i < n; i++) {
        var out1 = 0;
        for (var j = i; j <= n - 1; j++) {
            out1 = out1 + arr[j];
            if (out1 % 2 != 0) {
                out++;
            }
        }

    }
    return (out);

}

console.log(sub(arr, n));

///

var arr = [1, 2, 3];
var k = 3;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == k) {
            count++;
        }
    }
}
console.log(count)