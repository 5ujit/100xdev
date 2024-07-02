// Defining the countdown function
const countdown = function() {
  let count =30; // set initial count
  

  // create an interval that decrements counts every seconds
  const intervalId = setInterval(()=>{
    console.log(count);// output the current count

    // If count reaches 0, clear the interval
    if(count === 0){
      clearInterval(intervalId);
      console.log("Countdown complete !");
    }
    count--; // Decrement count 
  },1000)// Interval set to 1000ms (1 second)

}
countdown();