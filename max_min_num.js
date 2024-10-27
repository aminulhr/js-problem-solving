// get min number
const height = [22, 55, 66, 88, 45, 65, 89, 99, 2];
function minNumber(numbers) {
  let number = numbers[0];
  for (const num of numbers) {
    if (num < number) {
      number = num;
    }
  }
  return number;
}
console.log("Min Number:", minNumber(height));

// get max number
const height2 = [22, 55, 66, 88, 45, 65, 89, 99, 2];
function maxNumber(numbers) {
  let number = numbers[0];
  for (const num of numbers) {
    if (num > number) {
      number = num;
    }
  }
  return number;
}
console.log("Max Number:", maxNumber(height2));
