let a = 5;
let b = 7;
console.log(a, b);
const tamp = a;
a = b;
b = tamp;
console.log(a, b);

let x = 2;
let y = 3;
console.log(x, y);
[x, y] = [y, x];
console.log(x, y);
