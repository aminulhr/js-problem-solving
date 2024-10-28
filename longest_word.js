function longWord(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longWord("I am learning Programming to become a programmer"));

// function findLongestWord(str) {
//   let words = str.split(" ");
//   let longestWord = "";

//   for (let word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// // Example usage
// console.log(
//   findLongestWord("I am learning Programming to become a programmer")
// );
// // Output: Programming

const names = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallest(word) {
  let words = word[0]; // Start with the first name as the smallest
  for (let small of word) {
    if (small.length < words.length) {
      words = small; // Update if a shorter name is found
    }
  }
  return words;
}

console.log(smallest(names)); // Output: "ron"
