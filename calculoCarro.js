var custoFabrica = 40000;
var perDistribuidor;
var perImpostos;
var custoFinal;

perDistribuidor = (custoFabrica * 28) / 100;
perImpostos = (custoFabrica * 45) / 100;
custoFinal = custoFabrica + perDistribuidor + perImpostos;

console.log("O custo final do carro é: " + custoFinal)
