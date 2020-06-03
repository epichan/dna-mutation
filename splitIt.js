function splitIt (dna) {

    let splitIt = dna.map(base => base.split(''));
    console.log(splitIt)
    return splitIt

}


splitIt(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]);
splitIt(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']);

module.exports = {splitIt}