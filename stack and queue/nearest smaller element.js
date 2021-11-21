function rightAns(N, arr) {
    let stack = [];
    let ans = [];
    let top = -1;
    for (let i = N - 1; i >= 0; i--) {
        while (top > -1 && arr[stack[top]] >= arr[i]) {
            stack.pop();
            top--;
        }
        if (top === -1) {
            ans[i] = -1;
        } else {
            ans[i] = stack[top];
        }
        stack.push(i);
        top++;
    }
    return ans;
}

function leftAns(N, arr) {
    let ans = []
    let top = -1;
    let stack = []
    for (let i = 0; i < N; i++) {
        while (top > -1 && arr[stack[top]] >= arr[i]) {
            stack.pop();
            top--;
        }
        if (top == -1) {
            ans[i] = -1;
        } else {
            ans[i] = stack[top];
        }
        stack.push(i);
        top++;
    }
    return ans;
}

function NearestsmallerElement(N, arr) {
    let ans = [];
    let left = leftAns(N, arr);
    let right = rightAns(N, arr);
    for (let i = 0; i < N; i++) {
        if (left[i] == -1 && right[i] == -1) {
            ans[i] = -1;
        } else if (left[i] == -1) {
            ans[i] = arr[right[i]];
        } else if (right[i] == -1) {
            ans[i] = arr[left[i]];
        } else {
            var temp1 = Math.abs(i - left[i]);
            var temp2 = Math.abs(i - right[i]);
            if (temp1 > temp2) {
                ans[i] = arr[right[i]];
            } else {
                ans[i] = arr[left[i]];
            }
        }
    }
    console.log(ans.join(" "));
}

function runProgram(input) {
    input = input.trim().split("\n")
    var testcase = +input[0];
    var line = 1;

    for (var i = 0; i < testcase; i++) {
        var N = +input[line++]
        var arr = input[line++].trim().split(" ").map(Number)
        NearestsmallerElement(N, arr);
    }
}






if (process.env.USERNAME === "Admin") {
    runProgram(`1
8
39 27 11 4 24 32 32 1`);
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


var arr = [39, 27, 11, 4, 24, 32, 32, 1];
var n = arr.length;
var a = [];

function printNSE(arr, n) {
    var next, i, j;
    for (i = 0; i < n; i++) {
        next = -1;
        for (j = 0; j < n; j++) {
            if (arr[i] > arr[j]) {
                next = arr[j];
                break;
            }
        }
        a.push(next);
    }
    console.log(a.join(" "));
}



printNSE(arr, n);