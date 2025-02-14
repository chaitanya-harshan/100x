function delay(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

delay(2000).then(() => {
// Code to run after the delay
console.log("This code runs after the delay is complete.");
});

// This code continues execution immediately without blocking
console.log("This code runs before the delay.");
  