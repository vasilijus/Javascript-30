let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('button');

function timer(seconds) {
    // Clear any existing timer
    clearInterval(countdown);

    var now =  Date.now();

    var then = now + seconds * 1000;
    // console.log(now, then)
    displayTimeLeft(seconds) // otherwie the code will start from -1 second
    displayEndTime(then);

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
        var minutes = Math.floor(seconds / 60);
        var remainder = seconds % 60;
        var display = `${minutes}:${remainder < 10 ? "0"+remainder: remainder}`;
        document.title = display;
        timerDisplay.textContent = display;
        // console.log(display)
    }

    function displayEndTime(timestamp) {
        var end = new Date(timestamp);
        var hour = end.getHours();
        var adjustHour = hour < 12 ? hour : hour - 12;
        var mins = end.getMinutes();
        var display = `Be back @ ${adjustHour}:${mins < 10 ? "0":''}${mins}`
        endTime.textContent = display;
    }

}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    // console.log(seconds)
    timer(seconds)
}
// Buttons
buttons.forEach( button => button.addEventListener('click', startTimer));
// Custom minutes input
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var mins = this.minutes.value;
    timer(mins * 60);
    // console.log(mins)
    this.reset();
})

console.log("Enter: timer(time)");