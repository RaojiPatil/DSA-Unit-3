var a = "abcdefghijk";
arr = a.split("");
var N = arr.length;
var output = "";
for (var i = 0; i <= N; i = i + 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    output = output + arr[i] + " " + arr[i + 1] + " ";

}
console.log(output);