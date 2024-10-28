// function miletokilo(mile) {
//   let kilo = mile * 1.60934;
//   return kilo;
// }
// console.log(miletokilo(3));

//

// Find the friend with the smallest name.
const names = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallest(word) {
  let words = [0];
  for (let small of word) {
    if (small.length < words.length) {
      words = small;
    }
  }
  return words;
}
console.log(smallest(names));

// const names = ["rahim", "robin", "rafi", "ron", "rashed"];

// function smallest(word) {
//   let words = word[0]; // Start with the first name as the smallest
//   for (let small of word) {
//     if (small.length < words.length) {
//       words = small; // Update if a shorter name is found
//     }
//   }
//   return words;
// }

// console.log(smallest(names)); // Output: "ron"
