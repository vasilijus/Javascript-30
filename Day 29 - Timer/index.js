let countdown;

function timer(seconds) {

    var now =  Date.now();

    var then = now + seconds * 1000;
    // console.log(now, then)
    displayTimeLeft(seconds) // otherwie the code will start from -1 second

    countdown = setInterval( () => {
        const secondsLeft = Math.round( (then - Date.now() ) / 1000)
        // console.log(secondsLeft)
        if (secondsLeft <= 0 ) {
            clearInterval(countdown);
            return;
        }
        // Display Time
        displayTimeLeft(secondsLeft);
    }, 1000)

    function displayTimeLeft(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainder = seconds % 60;
        console.log({minutes, remainder})
    }

}

console.log("Enter: timer(time)");