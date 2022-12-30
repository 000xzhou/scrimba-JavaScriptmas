function countVowelConsonant(str) {
    // write code here
    //   (/[aeiou]/gi)
    return str.split("").reduce((sum, curr) => {
        if (curr.match(/[aeiou]/gi)) {
            sum++
        } else {
            sum += 2
        }
        return sum

    }
        , 0)
}
//   return str.split("").reduce((sum, curr)=> curr.match(/[aeiou]/gi) ? sum++ : sum+=2, 0 ) 


/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';

        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe(8);
    });
});