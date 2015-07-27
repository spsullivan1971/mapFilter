// console.log("Your code goes in this document.");

// _.times(100, function() {
  // console.log("hi");
// });


//1. get an array of all the prices in items
//2. sum that array
//3. return sum
//4. divided the sum the lenght of the prices array
//5. append to page.
var allPrice = items.map(function(el) {
  return el.price
});

var sumOFNums = allPrice.reduce(function(prev,el) {
  return prev + el;
})

var avgPrice = sumOFNums / allPrice.length;

document.querySelector("#answer1").innerHTML = avgPrice;
//answer2//
var rangePrice = items.filter(function(el){
  return (el.price>14 && el.price<18)
}).map(function(el){
  return [ el.title, el.price ]
})

document.querySelector("#answer2").innerHTML = rangePrice;

//question3//
var itemsGBR = items.filter(function(el) {
  return el.currency_code === "GBP"
}).map(function(el){
  return [el.title , el.price]
});

document.querySelector("#answer3").innerHTML = itemsGBR;

//Question4//
var itemsWood = items.filter(function(el) {
  return [el.materials === "wood"]
}).map(function(el){
  return [ el.title ]
});

document.querySelector("#answer4").innerHTML = itemsWood;

//answer5//
var itemsEight = items.filter(function(el){
  return (el.materials.length > 8)
}).map(function(el){
  return [el.title , el.sum , el.materials]
});

document.querySelector("#answer5").innerHTML = itemsEight;

//answer6//
var sellerMade = items.filter(function(el){
  return [el.who_made === "i_did"]
});
var sellerItems = sellerMade.length;

document.querySelector("#answer6").innerHTML = sellerItems;
