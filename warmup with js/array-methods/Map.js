// map method
const number = [2,3,5,6,8];
const square = function (number){
    return number*number;

}
const squareNumber = number.map(square);
console.log(squareNumber);