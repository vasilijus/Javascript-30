document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('keydown', function(e) {
        console.log(e.key , e.keyCode);
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key   = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        if (!audio) return; // filter inputs
        audio.currentTime = 0; // rewind to the start 
        console.log(audio);
        audio.play();
        key.classList.add('playing');
    });
    
    function removeTransition(e) {
        console.log(e, 'Transition ended');
        if(e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
        console.log(this)
    }
    
    const keys = document.querySelectorAll('.key');
    console.log(keys)
    keys.forEach( key => key.addEventListener('transitionend', removeTransition ))
})
