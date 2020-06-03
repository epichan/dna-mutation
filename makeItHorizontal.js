
const makeItHorizontal = (dna) => {

    let isMutated = dna.map(base => base.split(''));
    // console.log(isMutated)

    console.log(isMutated[0].map((col, i) => isMutated.map(row => row[i])));
}

makeItHorizontal(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]) //[['1', '1', '1'], ['2, '2', '2'], ['3', '3', '3']]

