const nodes = Array.from(document.querySelectorAll('[data-time]') );

const seconds = nodes
    .map(node => node.dataset.time)
    .map(timecCode => {
        const [mins, secs] = timecCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        console.log(mins,secs)
    })
    .reduce( (total , vidSeconds) =>
    total + vidSeconds )

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minuts = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(hours, minuts, secondsLeft)