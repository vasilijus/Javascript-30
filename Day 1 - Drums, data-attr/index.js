document.addEventListener('keydown', function(e) {
    console.log(e.key , e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key   = document.querySelector(`key[data-key="${e.keyCode}"]`);
    if (!audio) return; // filter inputs
    audio.currentTime = 0; // rewind to the start 
    console.log(audio);
    audio.play();
    key.classList.add('playing');
})