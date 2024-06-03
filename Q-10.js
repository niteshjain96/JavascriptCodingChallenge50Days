// Reverse The Words Maintaining the same order

function reverseWords(str) {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

const originalString = "John Doe";
const reversedString = reverseWords(originalString);
console.log(reversedString); // Output: "nhoJ eoD"
