// class
class Animal{
  constructor(name , leg, speaks){
    this.name= name
    this.leg = leg
    this.speaks= speaks;
  }
  speak(){
    console.log("hi  there "+ this.speaks);
  }
  
  
}
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal ("cat", 4,"meow" );
cat.speak();