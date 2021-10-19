function runProgram(input) {
    var str = input.split("");


    var n = str.length;
    var out = "";
    var s = new Set();
    for (var i = 0; i < n; i++)
        s.add(str[i]);
    for (const v of s) {
        out = out + v + "";
    }
    console.log(out.trim());

}


if (process.env.USERNAME === "Admin") {
    runProgram('aaaabbbbbcccccdddd');
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


var str = "aaabbbccddddd";
var out = "";
var out1 = "";
for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j < str.length; j++) {
        if (str[i] == str[j]) {
            out = out + str[j];

        } else {
            out1 = out1 + str[j];
        }
    }
}
console.log(out);
console.log(out1);

//


function makeid() {
    var text = "";
    var possible = "aaaabbbbbcccccdddd";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

console.log(makeid());


var a = "";

function findUnique(str) {

    var out = "";

    for (var i = 0; i < str.length; i++) {
        if (out.includes(str[i]) === false) {
            out += str[i]
        } else if (out.includes(str[i]) === " ") {
            out += "";
        }
    }
    return out;
}
(findUnique("my name is ankush"))
if (out = " ") {
    a = a + out;
}

console.log(a);