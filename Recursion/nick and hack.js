function runProgram(input) {
    input = input.trim().split("\n");
    var number = input[0].trim().split(" ").map(Number);
    var line = 1
    for (var i = 0; i < number; i++) {
        var n = +input[line++]
        hackmoney(n)
    }
a


}

function NickHack(n) {
    if (n == 1)
        return true;
    if (n == 0)
        return false;
    if (n % 20 == 0)
        return NickHack(n / 20) || NickHack(n / 10);
    else if (n % 10 == 0)
        return NickHack(n / 10);
    return false;
}

function hackmoney(n) {
    var ans = NickHack(n)
    if (ans == true) {
        console.log("Yes")
    } else {
        console.log("No")
    }
}




if (process.env.USERNAME === "Admin") {
    runProgram(`5
  1
  2
  10
  25
  200`);
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