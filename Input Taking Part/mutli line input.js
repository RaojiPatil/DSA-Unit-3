function runProgram(input) {
    var input = input.trim().split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var [size, k] = input[line++].trim().split(" ").map(Number);
        var array = input[line++].trim().split(" ").map(Number);

        console.log(twoSum(array, k));
    }
}

function twoSum(array, k) {
    left = 0
    right = array.length - 1;
    while (left < right) {
        var sum = array[left] + array[right];

        if (sum == k) {
            return (left, right);
        } else if (sum > k) {
            right--;
        } else {
            left++;
        }
    }
    return (-1, -1)
}



if (process.env.USERNAME === "Admin") {
    runProgram('3\n4 9\n2 7 11 15\n5 10\n1 2 3 5 5\n2 100\n48 49');
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