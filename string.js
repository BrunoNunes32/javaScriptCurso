var nome = "Bruno Henrique Alves Nunes";
var x = nome.length;
console.log(x);

//TERNARIO
resultado = x > 10 ? "Obrigado" : "Colocar nome completo";

console.log(resultado);

//UPPER
x = nome.toLocaleUpperCase();
console.log("Em maiusculo fica: " + x);

//LOWER
x = nome.toLocaleLowerCase();
console.log("Em minusculo fica: " + x);

//INDEXOF
x = nome.indexOf("Alves");
console.log("Posição: " + x);

//SLICE
x = nome.slice(0, 5);
console.log("Da posião 0 até a posicao 5 é: " + x);

x = nome.slice(6);
console.log("Da posição 6 em diante é: " + x);

//INCLUDES
x = nome.includes("Alves");
console.log("Existe o nome na string? " + x);

//CONCAT
var str1 = "Hello";
var str2 = "World!";

x = str1.concat(str2);
console.log("String concatenada é: " + x);

//TRIM
var texto = "         Olá texto Grande      ";
console.log(texto.trim());

//SPLIT
var num = "0,1,2,3,4,5,6,7,8,9";
x = num.split(",");
console.log("O texto em array fica: " + x[5]);
