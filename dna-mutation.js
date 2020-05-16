const hasMutation = (dna) => {
    let yLength = dna.length;
    let xLength = dna[0].length;
    let count = 1;

    let isMutated = dna.map(base => base.split(''));

    isMutated.forEach(element => {

        for (let j = 0; j <= element.length - 1; j++) {
            let current = element[j]
            let next = element[j + 1]
            if (current === next) {
                count += 1
                if (count === 4) {
                    console.log(true)
                    break
                }
                
            } else if (current !== next) {
                count = 1;
            }           
        }

        if (count === 4) {
            console.log('Has mutation')
        }

    });

hasMutation(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"])






