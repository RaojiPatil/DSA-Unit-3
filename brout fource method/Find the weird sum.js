function runProgram(input) {
    var input = input.split("\n");

    var text = +input[0];
    var line = 1;
    for (var i = 0; i < text; i++) {
        var n = input[line++];
        var arr = input[line++].split(" ").map(Number);
        sumof(arr);
    }


}


function sumof(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length - 1; i++) {
        sum = sum + arr[i];
    }
    if (sum = arr[arr.length - 1]) {
        console.log("yes");
    } else {
        console.log("no");
    }

}



if (process.env.USERNAME === "Admin") {
    runProgram('3\n3\n1 2 3\n4\n0 1 2 3\n4\n2 3 6 10');
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