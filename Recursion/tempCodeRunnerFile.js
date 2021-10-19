

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