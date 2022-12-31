function insertDashes(arr) {
    // write code here
}



/**
* Test Suite 
*/
function insertDashes(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").join("-");
    }
    return arr.join(" ")
}

describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";

        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);

        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});