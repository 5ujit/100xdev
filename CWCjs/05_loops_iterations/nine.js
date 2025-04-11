// reduce 

// const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,curraval){
//     console.log(`acc: ${acc} and currval: ${curraval}`);
    
//     return acc+curraval
// },0)

// const myTotal=myNubs.reduce((acc,curr)=> acc + curr ,0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 599
    },
    {
        itemName: "softSkill course",
        price: 2999
    },
    {
        itemName: "devOps course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 2999
    },

]


// const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price, 0);



const priceTopay= shoppingCart.reduce((acc,item)=>{
  return  (acc + item.price)

},0)
console.log(priceTopay);