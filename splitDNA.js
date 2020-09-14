'strict mode'

const {findIt} = require('./findIt')

function splitDNA(dna) {//función auxiliar

    let isMutated = dna.map(base => base.split(''));

    return findIt(isMutated)

}

console.log(splitDNA(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]));
console.log(splitDNA(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']));

module.exports = {
    splitDNA
};
