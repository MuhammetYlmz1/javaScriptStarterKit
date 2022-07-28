let cart=[
    {id:1,productName:"Telefon",quantiyty:3,unitPrice:4000},
    {id:2,productName:"Bilgisayar",quantiyty:6,unitPrice:15000},
    {id:3,productName:"Bardak",quantiyty:7,unitPrice:25},
    {id:4,productName:"Kitap",quantiyty:20,unitPrice:15},
    {id:5,productName:"Mouse",quantiyty:8,unitPrice:1500},
]

//SPA

//sepeti dolaş herbir product için product.productName  getir
cart.map(product=>{
    console.log(product.productName+" - "+product.unitPrice* product.quantiyty)
})


function addToCart(sepet) {
    sepet.push({id:7,productName:"Klavye",quantiyty:10,unitPrice:2000})
}
//addToCart(cart)
//console.log(cart)

let number=10

function sayiTopla(params) {
    params +=1
}
sayiTopla(number)
console.log(number)