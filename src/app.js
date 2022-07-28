function foodPrice(price,addValue) {
    let newPrice=[];
    for (let i = 0; i < price.length; i++) {
        var element = price[i]+addValue;
        newPrice.push(element);
        
    }
    console.log(element);
    return newPrice;
}
const result=foodPrice([10,20,30],10);
console.log(result);