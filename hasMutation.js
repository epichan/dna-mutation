//Punto de entrada
const { findIt } = require('./findIt');

const hasMutation = ({ dna }) => {

    return findIt(dna);

};

const dna = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'];

console.log('Esto está imprimiendo', hasMutation({
    dna,
}));
