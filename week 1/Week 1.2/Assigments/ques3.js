// question  create a terminal clock (HH:MM:SS)


// Function to format time digits (adds leading zero if necessary)
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

// Function to get the current time in HH:MM:SS format
function getCurrentTime() {
  const now = new Date();
  const hours = formatTime(now.getHours());
  const minutes = formatTime(now.getMinutes());
  const seconds = formatTime(now.getSeconds());
  return `${hours}:${minutes}:${seconds}`;
}

// Function to update and display the clock every second
function displayClock() {
  // Clear the terminal
  console.clear();

  // Get the current time
  const currentTime = getCurrentTime();

  // Output the current time
  console.log(currentTime);
}

// Update and display the clock every second
setInterval(displayClock, 1000);


