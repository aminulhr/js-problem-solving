const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];

function averagePrice(phones) {
  // corrected function name
  let total = 0;
  for (const phone of phones) {
    // renamed to 'phone' for clarity
    total = total + phone.price;
  }
  const average = total / phones.length; // corrected variable name
  return average;
}

console.log(averagePrice(phones)); // Output: 58000
