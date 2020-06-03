//Import dna-mutation

const hasMutation = require('../dna-mutation.js');
const dna = require('../dna-mutation.js');

describe('Detect if a person has genetic differences based on its DNA sequence functionality test', () => {
    test('Input should be an array', () => {
        expect(typeof dna).toBe('array');
    });

    xtest('should be type function', () => {
        // expect(typeof hasMutation.toBe('function');
        expect(typeof hasMutation).toBe('function');
    })
});