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
