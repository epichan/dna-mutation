const makeItDiagonal = (dna) => {

    console.log(dna)

    let yLength = dna.length;
    let xLength = dna[0].length;
    let maxLength = Math.max(xLength, yLength);
    let temp;

    for (let k = 0; k <= 2 * (maxLength - 1); ++k) {
        temp = [];
        for (let y = yLength - 1; y >= 0; --y) {
            let x = k - y;
            if (x >= 0 && x < xLength) {
                temp.push(dna[y][x]);
            }
        }
        if (temp.length > 0) {
            temp.join('')
        }
        console.log(temp)
    }

}





makeItDiagonal(["ABCD","EFGH","IJKL"])

makeItDiagonal(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'])

makeItDiagonal(['ACTACT', 'TATGCC', 'GGAACA', 'CTTACC', 'GGGGTT', 'ACTGAG'])