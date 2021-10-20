// var str = "abcd"

// for (var i = 0; i < str.length; i++) {
//     var out = ""
//     for (var j = i; j < str.length; j++) {
//         out = out + str[j];
//         console.log(out);

//     }
// }


//


function runProgram(input) {
    var input = input.split("\n");
    var n = +input[0];
    var line = 1;
    var str = input[line++].split("");

    for (var i = 0; i <= str.length; i++) {
        var out = ""
        for (var j = i; j < str.length; j++) {
            out = out + str[j];
            console.log(out);

        }
    }
}





if (process.env.USERNAME === "Admin") {
    runProgram('4\nabcd');
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