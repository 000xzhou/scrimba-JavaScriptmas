/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {

    const char = str.split("")
    const newStr = new Array()

    for (let i = 0; i < char.length; i++) {
        if (i % 2 == 0) {
            newStr.push(char[i].toUpperCase())
        } else {
            newStr.push(char[i])
        }
    }

    return newStr.join("");
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));