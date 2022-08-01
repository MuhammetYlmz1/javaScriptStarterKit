function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : ürün : " + productName + " adet : " + quantity);

}
addToCart(10);

//değişkeni fonksiyon yapma
let sayHello = () => {
    console.log("Hello world");

}
sayHello()

let sayHello2 = function () {
    console.log("Hello world 2")
}
sayHello2()

function addToCart2(productName, quantity, unitPrice) {

}
addToCart2("Elma", 5, 10);
addToCart2("Armut", 6, 20);

function addToCart3(product) {
    console.log("Ürün : " + product.productName + "-- UnitPrice : " + product.unitPrice + "-- Quantity : " + product.quantity)
}

let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 }
let product2 = { productName: "Armut", unitPrice: 20, quantity: 6 }
let product3 = { productName: "Karpuz", unitPrice: 30, quantity: 7 }


addToCart3(product1)

function addToCart4(products) {
    /* products.forEach(element => {
         console.log(element)
     });*/
    console.log(products)

}
let products = [
    { productName: "Elma", unitPrice: 10, quantity: 5 },
    { productName: "Armut", unitPrice: 20, quantity: 6 },
    { productName: "Karpuz", unitPrice: 30, quantity: 7 }
]
addToCart4(products)

//...deger yaptığımız zaman gönderilen parametreleri bir array e koy demek
//rest operatörü
function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];

    }
    console.log(total);
}
add(20, 30)
add(40, 50, 60)
let numbers = [30, 10, 25, 15]
//console.log(...numbers)
console.log(Math.max(...numbers))


let [icAnadolu, marmara, karadeni, [icAnadoluSehirleri, marmaraSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "30M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Sinop", "Trabzon"],
    ]
]

//console.log(icAnadolu.name)
//console.log(marmara.population)
console.log(icAnadoluSehirleri)
console.log(marmaraSehirleri)



let newProductName, newUnitPrice, newQuantity
({ productName: newProductName, unitPrice: newUnitPrice, quantity: newQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


