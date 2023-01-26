function mango(quantity, price){
    let normalQuantity = quantity - Math.floor(quantity / 3);
   return normalQuantity * price;
 }