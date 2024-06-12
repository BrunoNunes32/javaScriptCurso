//IF
var pais = "Brasil";

if (pais != "Brasil") {
  console.log("Estrangeiro");
} else {
  console.log("brasileiro");
}

var idade = 24;

if (idade < 16) {
  console.log("Não vota");
} else if (idade < 18 || idade > 65) {
  console.log("Votação opcional");
} else {
  console.log("Voto obrigatorios");
}

//FOR
var carro = [
  { modelo: "Audi A3", marca: "Audi", ano: 2020 },
  { modelo: "COMPASS", marca: "JEEP", ano: 2018 },
];
for (let caracteristica in carro) {
  console.log(carro[caracteristica]);
}


for (let carros of carro) {
  console.log(carros.ano);
}

//SWITCH
var expr = "Banana";

switch (expr) {
  case "Laranja":
    console.log("é Laranja");
    break;
  case "Maçã":
    console.log("é Maçã");
    break;
  case "Abacate":
    console.log("é Abacate");
    break;
  case "Banana":
    console.log("é Banana");
    break;
  default:
    console.log("Não encontrado");
    break;
}

var diaSemana = 1;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda");
    break;
  case 3:
    console.log("Terça");
    break;
  case 4:
    console.log("Quarta");
    break;
  case 5:
    console.log("Quinta");
    break;
  case 6:
    console.log("Sexta");
    break;
  case 7:
    console.log("Sabado");
    break;
  default:
    console.log("Não encontrado");
    break;
}

//WHILE
var c = 1;

while (c <= 10) {
  console.log(c);
  c++;
}

//DO WHILE
var t = 1;
do {
  console.log(t);
  t++;
} while (t < 6);
