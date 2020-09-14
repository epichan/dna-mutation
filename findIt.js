function findIt (isMutated) { //auxiliar funtion

    // const isMutated = splitDNA(dna)
    const findIt = []
    
    for (let i = 0; i <= isMutated.length - 1; i++) {

        let nucleotides = isMutated[i]
        // console.log(nucleotides)
        let count = 1;
        

        nucleotides.forEach((element, index, array) => {

            // console.log(element)

            if (element === array[index + 1]) {
                count += 1
                // console.log(true)
                // console.log(count)
                } else if (count === 4 && element !== array[index + 1]) {
                count = 1
                // console.log('You did it')
                findIt.push(1)
            } else {
                count = 1
            }// console.log (false)
            // console.log(count)
            
        })
        // console.log(count)
    }

    if (findIt.length > 0) {
        return true
    } else { return false}
}

// console.log(findIt(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"]));
// console.log(findIt(['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG']));

module.exports = {findIt};
