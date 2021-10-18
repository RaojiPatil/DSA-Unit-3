//var str = "abcc";
//var K = 2;



// function countSubstrings(str, K) {
//     var N = str.length;
//     var answer = 0;
//     var map = new Map();

//     for (var i = 0; i < K; i++) {
//         if (map.has(str[i]))
//             map.set(str[i], map.get(str[i]) + 1)
//         else
//             map.set(str[i], 1)
//     }

//     if (map.size == K)
//         answer++;
//     for (var i = K; i < N; i++) {

//         if (map.has(str[i]))
//             map.set(str[i], map.get(str[i]) + 1)
//         else
//             map.set(str[i], 1)

//         if (map.has(str[i - K]))
//             map.set(str[i - K], map.get(str[i - K]) - 1)

//         if (map.has(str[i - K]) && map.get(str[i - K]) == 0) {
//             map.delete(str[i - K]);
//         }

//         if (map.size == K) {
//             answer++;
//         }
//     }

//     return answer;
// }


// console.log(countSubstrings(str, K));

//

function runProgram(input) {
    var input = input.split("\n");

    var [size, k] = input[0].split(" ").map(Number);
    var line = 1;
    var str = input[1].split(" ");

    console.log(str, k);

}



if (process.env.USERNAME === "Admin") {
    runProgram('4 2\nabcc');
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