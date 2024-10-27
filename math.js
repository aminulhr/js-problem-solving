console.log(Math.min(10, 20, 30, 4, 50, -99));
console.log(Math.max(10, 20, 30, 4, 50, 8, 90, 5, 6));
console.log(Math.PI);
console.log(Math.abs(30 - 60)); //2টা সংখ্যার মধ্যে ডিফারেন্স বের করে দিবে।
console.log(Math.round(4.25)); //  নিকটবর্তি পূর্ণসংখ্যা করে দিবে।
console.log(Math.round(4.7));
console.log(Math.floor(3.9)); // ভগ্নাংশ ফেলাই দিয়ে পূর্ণ সংখ্যা রাখবে।
console.log(Math.floor(3.2));
console.log(Math.ceil(6.22)); //ভগ্নাংশের উপরের পূর্ণসংখ্যা দিবে।
console.log(Math.ceil(6.91));
console.log(Math.random()); // ১-১০ এর ভিতরে এলোমেলো সংখ্যা দিবে।

// ১-১০০ এর ভিতরে এলোমেলো  পূর্ণসংখ্যা পেতে হলে
const IntegerNumer = Math.round(Math.random() * 100);
console.log(IntegerNumer);
