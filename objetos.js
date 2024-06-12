//FUNÇÕES
var pessoa = {
  nome: "Luis",
  sobrennome: "Otavio",
};
console.log(pessoa.sobrennome);

var pessoa1 = new Object();
pessoa1.nome = "Angela";
pessoa1.sobrennome = "Silva";
console.log(pessoa1.nome);

pessoa1.falarNome = function () {
  console.log("Nome é: " + this.nome);
};
pessoa1.falarNome();

function criarPessoa(nome, sobrenome) {
  return { nome, sobrenome };
}

var p1 = criarPessoa("jao", "trancoso");
var p2 = criarPessoa("maria", "trancosa");

console.log(p1);

//OBJETOS
function multiplicar(a, b){
    return a * b;
}

var x = multiplicar(5,3)
console.log(x)

function funcao( a, b=2, c=4){
    console.log(a+b+c);
}
funcao(2)
funcao(2,6)

function teste(...args){
    console.log(args)
}

teste(2,5,6,7,9)