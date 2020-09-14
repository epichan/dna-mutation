const {findIt} = require('./findIt')

function makeItHorizontal (dna) {

    let maped = dna.map(base => base.split(''));

    let isMutated = (maped[0].map((col, i) => maped.map(row => row[i])));

    return findIt(isMutated)
}

// makeItHorizontal();

console.log(makeItHorizontal(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]));
console.log(makeItHorizontal(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']));

module.exports =  {makeItHorizontal}