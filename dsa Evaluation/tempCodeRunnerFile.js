var arr = [1, 2, 3];
var k = 3;
var count = 0;

for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == k) {
            count++;
        }
    }
}
console.log(count)