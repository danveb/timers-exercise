// Timers Exercise 

// #1 countdown: Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it. Once the value is 0 it should log “DONE!” and stop.

// function declaration; parameter num 
function countDown(num) {
    // initialize variable for clock as setInterval every 1000 miliseconds 
    let clock = setInterval(function() {
        // decrease value of num by 1 each second
        num -= 1; 
        // if num reaches 0 
        if(num === 0) {
            // clearInterval of clock
            clearInterval(clock); 
            // console.log('Done')
            console.log('DONE!'); 
        } else {
            console.log(num); 
        }
    }, 1000);
}
countDown(10); 

// #2 randomGame: Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.

// function declaration 
function randomGame() {
    // initialize counter as 0
    let counter = 0; 
    // initialize clock and start picking number every second (setInterval) 
    let clock = setInterval(function() {
        // initialize randomNum generator between 0 and 1 
        let randomNum = Math.random(); 
        counter++; 
        // if randomNum > 0.75
        if(randomNum > 0.75) {
            // stop clock
            clearInterval(clock); 
            // console.log counter
            console.log(`It took ${counter} attempt(s) to find a number greater than 0.75`); 
        }
    }, 1000)
}
randomGame(); 
