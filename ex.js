// function miletokilo(mile) {
//   let kilo = mile * 1.60934;
//   return kilo;
// }
// console.log(miletokilo(3));

//

const heights2 = [167, 190, 120, 165, 137];

function heights(tall) {
  let num = tall[0];
  for (let height of tall) {
    if (height < num) {
      num = height;
    }
  }
  return num;
}
console.log(heights(heights2));
