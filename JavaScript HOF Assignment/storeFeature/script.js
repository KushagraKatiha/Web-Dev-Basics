let priceDollar = [
  { Item: "item1", Price: 2 },
  { Item: "item2", Price: 20 },
  { Item: "item3", Price: 5 },
  { Item: "item4", Price: 100 },
  { Item: "item5", Price: 1 },
  { Item: "item6", Price: 11 },
];
let priceRupees = [];

priceDollar.map((element) => {
  priceRupees.push({
    Item: element["Item"],
    Price: element["Price"] * 80,
  });
});

console.log(priceDollar);
console.log(priceRupees);
