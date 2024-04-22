console.log("\nTrabalhando com Loops");

const salvador = "Salvador";
const saoPaulo = "São Paulo";

const listaDestinos = ("Salvador", "São Paulo", "Curitiba", "Rio de Janeiro");

const idadeComprador = 25;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Curitiba";

console.log("\nDestinos possíveis: ");
console.log(listaDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

while (contador < 3) {
  if (listaDestinos[contador] == destino) {
    console.log("Destino existe");
  } else {
    console.log("Destino não existe");
  }
  contador += 1;
}
