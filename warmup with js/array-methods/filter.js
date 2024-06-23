const number =[1,23,4,5,66,33,11,45];
const isEven= function (number){
    return number%3==0;
}
const evenNumber= number.filter(isEven);
console.log(evenNumber)