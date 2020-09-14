const { splitDNA } = require('./splitDNA.js');

const isMutated = splitDNA(["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"])


isMutated.forEach(element => {
    console.log(element)
    let count = 1;

    for (let j = 0; j <= element.length - 1; j++) {    

        let current = element[j]
        let previous = element[j - 1]
        if (current === previous && previous !== undefined) {
            count += 1;
        } else {
            count = 1;
            continue
        }
        console.log(count)
        
    }
}

)

