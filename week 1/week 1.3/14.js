function currentTimePrint(){
  console.log(new Date().getTime());
}
setInterval(currentTimePrint, 2000)