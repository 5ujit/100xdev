/*calculate the time it takes
 between a setTimeout call 
and the inner function actually running
*/
// Start time before setTimeout call
const startTime = Date.now();

// Call setTimeout with a delay of 1000ms (1 second)
setTimeout(() => {
    // Inner function that runs after the delay
    const endTime = Date.now();
    const elapsedTime = endTime - startTime;
    console.log(`Time elapsed: ${elapsedTime}ms`);
}, 1000);
