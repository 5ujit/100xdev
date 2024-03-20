// // Function to start the countdown
// function startTimer(duration, display){
//   var timer = duration;
//   setInterval(function (){
//     var minutes = parseInt(timer / 60 , 10);
//     var seconds = parseInt(timer % 60 , 10);
//     if (minutes < 10){
//       minutes = "0" + minutes;
//     }
//     if (seconds < 10){
//       seconds = "0" + seconds ;
//     }
//     display.textContent = minutes + ":" + seconds; // Concatenate minutes and seconds
//     if (--timer < 0){
//       timer = duration;
//     }
//   },1000);
// }

// window.onload = function () {
//   var thirtySeconds = 30;
//   var display = document.getElementById('timer');
//   startTimer(thirtySeconds, display);
// };

// // Function to log "code help" every 2 seconds
// function cod(){
//   console.log("code help");
// }
// setInterval(cod, 2000);

// function to count from 30 to 0


// Define the countdown function
// function countdown() {
//   let count = 30; // Set initial count value
  
//   // Define the interval function to update the countdown
//   const timer = setInterval(() => {
//     console.log(count); // Output the current count
//     count--; // Decrement the count
    
//     // Check if countdown is complete
//     if (count < 0) {
//       clearInterval(timer); // Stop the timer
//       console.log("Countdown complete!"); // Output completion message
//     }
//   }, 1000); // Update the countdown every 1000ms (1 second)
// }

// // Start the countdown
// countdown();







document.addEventListener("DOMContentLoaded", function() {
  const timerDisplay = document.getElementById('timer');
  const startButton = document.getElementById('startButton');
  let seconds = 30;
  let countdownInterval;

  function startCountdown() {
    countdownInterval = setInterval(function() {
      timerDisplay.textContent = seconds;
      seconds--;

      if (seconds < 0) {
        clearInterval(countdownInterval);
        alert('Countdown finished!');
        seconds = 30; // Reset the timer to 30 seconds after it finishes
        timerDisplay.textContent = seconds;
      }
    }, 1000);
  }

  startButton.addEventListener('click', startCountdown);
});
















