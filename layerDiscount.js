// first 100 == 100 taka
// second 100-200 == 90 taka
// avobe 200 == 800 taka
function layerDiscount(quantity) {
  let firstPrice = 100;
  let secondPrice = 90;
  let avobePrice = 70;
  if (quantity <= 100) {
    return quantity * first100;
  } else if (quantity <= 200) {
    const countsecond = firstPrice * 100;
    const remainingsecond = quantity - 100;
    const countRemaining = remainingsecond * secondPrice;
    const total = countsecond + countRemaining;
    return total;
  } else {
    const avobeFirst = 100 * firstPrice;
    const avobeSecond = 100 * secondPrice;
    const remaininhAvobe = quantity - 200;
    const totalRamain = remaininhAvobe * avobePrice;
    const total = avobeFirst + totalRamain + avobeSecond;
    return total;
  }
}
console.log(layerDiscount(210));
