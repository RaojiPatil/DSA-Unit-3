// Driver code
var arr = [1, 2, 3, 4];
var n = arr.length;
var x = 10;

var maxN = 20
var maxSum = 50
var minSum = 50
var base = 50

var dp = Array.from(Array(maxN),
    () => Array(maxSum + minSum));
var v = Array.from(Array(maxN),
    () => Array(maxSum + minSum));

function findCnt(arr, i, required_sum, n) {
    // Base case
    if (i == n) {
        if (required_sum == 0)
            return 1;
        else
            return 0;
    }
    if (v[i][required_sum + base])
        return dp[i][required_sum + base];

    v[i][required_sum + base] = 1;

    dp[i][required_sum + base] = findCnt(arr, i + 1, required_sum, n) +
        findCnt(arr, i + 1, required_sum - arr[i], n);
    return dp[i][required_sum + base];
}


console.log(findCnt(arr, 0, x, n));