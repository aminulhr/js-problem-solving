function calculateMoney(tiket) {
  if (tiket < 0) {
    return "Error: Ticket count cannot be negative.";
  }
  const parTicate = 120;
  const daruan = 500;
  const staf = 8 * 50;
  const riminigtotals = tiket * parTicate;
  const riminigtotal = riminigtotals - (daruan + staf);
  return riminigtotal;
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));
