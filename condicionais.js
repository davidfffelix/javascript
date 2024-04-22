console.log("Trabalhando com condicionais");

const salvador = "Salvador";
const saoPaulo = "São Paulo";

const listaDestinos = new Array(
  "Salvador",
  "São Paulo",
  "Curitiba",
  "Rio de Janeiro"
);

const idadeComprador = 25;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDestinos);

// if (idadeComprador >= 18) {
//   console.log("Comprador maior de idade");
//   listaDestinos.splice(3, 1);
// } else if (estaAcompanhada) { 
//   console.log("Comprador está acompanhado");
//   listaDestinos.splice(3, 1);
// } else {
//   console.log("Não é maior de idade e não posso vender");
// }


if (idadeComprador >= 18 && estaAcompanhada == true) {
  console.log("Boa viagem!!!");
  listaDestinos.splice(3, 1);
} else {
  console.log("Não é maior de idade e não posso vender");
}
console.log('Embarque: \n\n');

if(idadeComprador >= 18 && temPassagemComprada) {
  console.log('Boa viagem!!!');
} else {
  console.log('Você não pode embarcar');
}