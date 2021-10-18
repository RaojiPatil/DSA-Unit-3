function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 1; i <= text; i++) {
        var [size, n] = input[line++].split(" ").map(Number);
        var arr = input[line++].split(" ").map(Number);
        console.log(findPair(arr, size, n));

    }
}


function findPair(arr, size, n) {

    let i = 0;
    let j = 1;

    var c = 0;
    while (i < size && j < size) {
        if (i != j && arr[j] - arr[i] == n) {
            return "Yes";

        } else if (arr[j] - arr[i] < n) {
            j++;
        } else {
            i++;
        }
    }
    return "No";

}





if (process.env.USERNAME === "Admin") {
    runProgram('2\n5 3\n1 2 3 4 5\n5 8\n1 2 3 4 5');
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




// Queshion 2

function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var size = input[line++];
        var arr1 = input[line++].split(" ").map(Number);
        var arr2 = input[line++].split(" ").map(Number);
        console.log(countEqual(arr1, arr2));

    }
}

function countEqual(arr1, arr2) {

    var first = 0;
    var second = arr1.length - 1;
    var count = 0;

    while (first < arr1.length && second >= 0) {

        if (arr1[first] < arr2[second]) {
            first++;
        } else if (arr2[second] < arr1[first]) {
            second--;
        } else {
            count++;
            first++;
            second--;
        }
    }
    return count;
}



if (process.env.USERNAME === "Admin") {
    runProgram('1\n6\n1 2 2 3 4 5\n4 4 3 2 1 1');
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