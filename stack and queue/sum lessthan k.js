function runProgram(input) {
    var input = input.trim().split("\n");

    var [size, k] = input[0].split(" ").map(Number);
    var line = 1;
    var arr = input[line++].split(" ").map(Number);
    raoji(arr, k);

}

function raoji(arr, k) {
    count = 0;


    for (var i = 0; i < arr.length; i++) {

        if (arr[i] <= k) {
            count = count + arr[i];
        }
    }
    console.log(count);
}






if (process.env.USERNAME === "Admin") {
    runProgram('4 2\n1 2 3 4');
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