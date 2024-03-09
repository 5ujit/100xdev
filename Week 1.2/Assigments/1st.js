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

function wellcome(name){
  console.log(" hello " + name + ", sawagat hai apka");
}
wellcome("ram")

function wellcome (abc){
  
}