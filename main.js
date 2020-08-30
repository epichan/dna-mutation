//Punto de entrada
const { hasMutation } = require('./hasMutation');

const main = ({ dna }) => {

    return hasMutation(dna);

};

const dna = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'];

console.log('Esto está imprimiendo', main({
    dna,
}));
