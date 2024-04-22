console.log('Trabalhando com listas');

const salvador = 'Salvador';
const saoPaulo = 'São Paulo';

const listaDestinos = [
    'Salvador',
    'São Paulo',
    'Curitiba'
];

console.log('Destinos possíveis: ');
// console.log(salvador, saoPaulo);
console.log(listaDestinos);

listaDestinos.push('Rio de Janeiro');
console.log(listaDestinos);
console.log(listaDestinos[1]);

listaDestinos.splice(2);
console.log(listaDestinos[1]);

