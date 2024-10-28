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
