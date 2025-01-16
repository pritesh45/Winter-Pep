function calculateDiscount(price,discount=10){
let finalPrice=price-discount;
return finalPrice;
}
console.log("final price is "+calculateDiscount(220));
