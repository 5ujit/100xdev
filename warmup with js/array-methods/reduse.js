/*
const numbers = [1,2,3,4,5];
// aim :sum of all the  number in Array
const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator+ currentValue;
})
console.log(sum) */

//new example//


const userCart=[
    {product: 1, productName: "tab", price: 90000},
    {product: 2, productName: "sendMoney", price: 25000},
    {product: 3, productName: "mac", price: 150000}
]
const totalAmount= userCart.reduce((a,b)=>{
    return a+ b.price;
},0)
console.log(totalAmount);