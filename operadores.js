var n = 3;
n = n - 10;
console.log(n);
n = n * 5;
console.log(n);
n *= 10;
console.log(n);

var x = 10;
x++;
x--;
console.log(x);

console.log(n < x);
console.log(n > x);
console.log(n != x);

b = 20;
c = 60;

console.log(n < x);
console.log(b <= c && b != c);
console.log(b <= c || b != c);
console.log(!(b <= c || b != c));

console.log(a > b && b % 2 == 0);

console.log(a <= b || b / 2 == 2);

console.log(a > b && 5 <= b);

resultado = b % 2 == 0 ? "Par" : "Impar";
