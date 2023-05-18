/* myCars is an array of objects. You will need to calculate the total price (in lakhs) of all cars except ‘Rickshaw’.

Bonus points for one liner answer using Array functions ( ie. map, reduce, filter)

const myCars = [
  { name: 'Axio 2018 WXB', priceLakh: 22.5 },
  { name: 'Premio 2015', priceLakh: 26 },
  { name: 'Rickshaw', priceLakh: 0.5 },
  { name: 'Civic 2019', priceLakh: 34.5 }
]

 */


const myCars = [
  { name: 'Axio 2018 WXB', priceLakh: 22.5 },
  { name: 'Premio 2015', priceLakh: 26 },
  { name: 'Rickshaw', priceLakh: 0.5 },
  { name: 'Civic 2019', priceLakh: 34.5 }
];

console.log(myCars.reduce((price, items) => (items.name !== 'Rickshaw') ? (price + items.priceLakh): price, 0));



