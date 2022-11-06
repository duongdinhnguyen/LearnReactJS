var data = [1, 2, 3, 6, 7];
// destructuring
var [a, b, c] = data;
console.log(a + " " + b + " " + c);

// rest
var [m, , k, ...rest] = data;
console.log(rest);
