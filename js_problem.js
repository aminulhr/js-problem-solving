// function miletokilo(mile) {
//   let kilo = mile * 1.60934;
//   return kilo;
// }
// console.log(miletokilo(3));

function countVoual(str) {
  let vowel = "aeiouAEIOU";
  let count = 0;
  for (let chr of str) {
    if (vowel.includes(chr)) {
      count++;
    }
  }
  return count;
}
console.log(countVoual("Hello world aeiou"));
