/* You work at a shoe company. You are tasked to create product codes from all variations( ie. colors, sizes, prices). Product codes should be in this format {BASE_SKU}-{COLOR}-{SIZE}-{PRICE} Example: kf1097-black-40-10
Implement prepareCodes( ) function. It should return an array of strings ( product codes ) Example: ['kf1097-black-40-10’,’kf1097-black-40-15’,’kf1097-black-40-24’,’kf1097-black-40-40',......]

var baseSKU = 'kf1097'

var variationOptions = [
  { name: 'size', options: [40, 41, 42, 43] },
  { name: 'color', options: ['black', 'brown', 'chocolate'] },
  { name: 'price', options: [10, 15, 24, 40] }
]

function prepareCodes() {}
var productCodes = prepareCodes()

console.log('product codes: ' + productCodes)

 */


var baseSKU = 'kf1097'

var variationOptions = [
    { name: 'size', options: [40, 41, 42, 43] },
    { name: 'color', options: ['black', 'brown', 'chocolate'] },
    { name: 'price', options: [10, 15, 24, 40] }
]

let proCode = [];
let generatedCode, size, color, price;


function prepareCodes() {

    for (size of variationOptions[0].options) {
        for (color of variationOptions[1].options) {
            for (price of variationOptions[2].options) {
                generatedCode = (baseSKU + '-' + color + '-' + size + '-' + price);
                proCode.push(generatedCode);
            }
        }
    }

    return proCode;

}

var productCodes = prepareCodes();
console.log('product codes:', productCodes);





