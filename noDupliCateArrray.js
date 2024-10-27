let friends = [
  "Aminul",
  "Haque",
  "Rana",
  "Rakibul",
  "Haque",
  "Monjurul",
  "Rana",
  "Haque",
];
function noDupplyCate(name) {
  const friendName = [];
  for (const item of name) {
    if (friendName.includes(item) === false) {
      friendName.push(item);
    }
  }
  return friendName;
}
console.log(noDupplyCate(friends));
