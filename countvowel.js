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
console.log(countVoual("Hello world"));
