var valores = [8, 1, 7, 2, 9];

console.log(valores[3]);

for (var pos = 0; pos < valores.length; pos++) {
  console.log("Posição: " + pos + " Valores: " + valores[pos]);
}

var carros = [];
carros[0] = "Volvo";
carros[1] = "Jeep";

var motos = new Array("BMW", "Yamaha", "Honda");

var soma = 0;
for (var pos = 0; pos < valores.length; pos++) {
  soma += valores[pos];
}

var resultado = soma / valores.length;
console.log("A media é: " + resultado);

//REVERSE
console.log("Array invertido: " + valores.reverse());

//JOIN
var array1 = [1, 2, 3, 4, 5, 6];
console.log(array1.join("|"));

//SHIFT
var retirado = array1.shift();
console.log("Shift: " + retirado);
console.log(array1);

//INDEXOF
console.log("Posição do numero 3: " + array1.indexOf(3));

//PUSH
array1.push(7);
console.log("Push: " + array1);

//POP
array1.pop();
console.log("Pop: " + array1);

//SPLICE
var array2 = [-5, 10, 15, 20, -3, 89];

var array3 = [1, 2, 3, 4, 5, 6, 7];

array3.splice(2, 2);
console.log("Splice: " + array3);

var nomes = ["Maria", "Joao", "Lucas", "Pedro"];
var novos = nomes.splice(1, 2, "Luiz", "Ronaldo");
console.log(nomes);
console.log(novos);

//UNSHIFT
var pais = ["Brasil", "Argentina", "Colombia"];
pais.unshift("Uruguai");
console.log(pais);

//SLICE
var pessoa = ["Edu", "Joana", "Wallance", "Rosana"];
var pessoa1 = pessoa.slice(1, 3);
console.log(pessoa);
console.log(pessoa1);

//CONCAT
var gerente = ["Davi", "Manoela"];
var empresa = pessoa.concat(gerente);
console.log(empresa);

//FILTER
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var resultado = numeros.filter((item) => item % 2 == 0);
console.log("Divisiveis por dois: " + resultado);

var numerosFiltrados = numeros.filter(function (valor) {
  return valor > 5;
});
console.log("Divisiveis por dois: " + numerosFiltrados);

function buscarValores(valor) {
  return valor < 5;
}

var numeroEncontrados = numeros.filter(buscarValores);
console.log(numeroEncontrados);

var r1 = numeros.filter((valor) => {
  return valor > 5;
});
console.log(r1);

var r2 = numeros.filter((valor) => valor > 5);
console.log(r2);

var funcionario = [
  { nome: "Luis", idade: 62 },
  { nome: "Davi", idade: 40 },
  { nome: "Arthur", idade: 18 },
  { nome: "Lucas", idade: 22 },
];

var pessoasListagem = funcionario.filter(function (valor) {
  //console.log(valor.nome);
  return valor.nome.length < 5;
});
console.log(pessoasListagem);

var produtos = [
  { id: 1, descricao: "Smartphone", categoria: "Eletronico" },
  { id: 2, descricao: "Notebook", categoria: "Eletronico" },
  { id: 3, descricao: "Geladeira", categoria: "Eletrodomestico" },
];

//REDUCE
console.log("==========REDUCE=========")
var soma = numeros.reduce(function (total, numero) {
  return total + numero;
}, 0);
console.log(soma);
console.log("==========REDUCE=========")

//FOREACH
var a = [10, 20, 30, 40, 50, 60];

a.forEach((valor) => console.log(valor));

var total = 0;
a.forEach((valor) => {
  total += valor;
});

console.log(total);

a.forEach(function (valor, indice, array) {
  console.log(array[indice]);
});

//MAP
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var num = numeros.map(function (valor) {
  return valor * 2;
});

console.log(num);

var funcionario = [
  { nome: "Luis", idade: 62 },
  { nome: "Davi", idade: 40 },
  { nome: "Arthur", idade: 18 },
  { nome: "Lucas", idade: 22 },
];

nomes = funcionario.map((pessoa) => pessoa.nome);

console.log(nomes);
