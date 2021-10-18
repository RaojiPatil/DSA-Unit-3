function runProgram(input) {
    var input = input.split("\n");

    var [size, K] = input[0].split(" ").map(Number);

    var arr = input[1];

    console.log(substring(arr, K));

}


function substring(arr, K) {
    var N = arr.length;
    var answer = 0;
    var out = new Map();

    for (var i = 0; i < K; i++) {
        if (out.has(arr[i]))
            out.set(arr[i], out.get(arr[i]) + 1)
        else
            out.set(arr[i], 1)
    }

    if (out.size == K)
        answer++;
    for (var i = K; i < N; i++) {

        if (out.has(arr[i]))
            out.set(arr[i], out.get(arr[i]) + 1)
        else
            out.set(arr[i], 1)

        if (out.has(arr[i - K]))
            out.set(arr[i - K], out.get(arr[i - K]) - 1)

        if (out.has(arr[i - K]) && out.get(arr[i - K]) == 0) {
            out.delete(arr[i - K]);
        }

        if (out.size == K) {
            answer++;
        }
    }

    return answer;
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