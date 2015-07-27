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
