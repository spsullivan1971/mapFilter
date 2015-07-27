/////Question1////////
var itemsPrice = items.map(function(el){
  return el.price
});

var sum = allPrice.reduce(function(prev.el){
  return prev + el;
});

var avgPrice = sum / allPrice.length;

document.querySelector("answer1").innHtml = avgPrice;

//grab items array//
