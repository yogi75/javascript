// Different ways of splitting digits from a number

// method 1
var num = 2468;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits);// [2, 4, 6, 8]

// method 2
var num = 34521, digits = [], sNum = num.toString();
for (var i = 0, len = sNum.length; i < len; i += 1) {
    digits.push(+sNum.charAt(i));
}
console.log(digits); // [3, 4, 5, 2, 1]
