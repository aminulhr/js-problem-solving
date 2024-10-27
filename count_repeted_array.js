//count_repeated_array
function countOccurrences(numbers, target) {
  let count = 0;
  for (let number of numbers) {
    if (number === target) {
      count++;
    }
  }
  return count;
}

// Sample usage
const numbers = [5, 6, 11, 12, 98, 5];
console.log(countOccurrences(numbers, 5)); // Output: 2
console.log(countOccurrences(numbers, 25)); // Output: 0

//or

//   function countOccurrences(numbers, target) {
//     return numbers.filter(num => num === target).length;
//   }

//   // Sample input
//   let numbers = [5, 6, 11, 12, 98, 5];

//   console.log(countOccurrences(numbers, 5));  // Output: 2
//   console.log(countOccurrences(numbers, 25)); // Output: 0
