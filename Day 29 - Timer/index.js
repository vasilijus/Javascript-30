let countdown;

function timer(seconds) {

    var now =  Date.now();

    var then = now + seconds * 1000;
    console.log(now, then)

    countdown = setInterval( () => {
        const secondsLeft = Math.round( (then - Date.now() ) / 1000)
        console.log(secondsLeft)
        if (secondsLeft <= 0 ) {
            clearInterval(countdown);
            return;
        }
    }, 1000)


}

timer(4)