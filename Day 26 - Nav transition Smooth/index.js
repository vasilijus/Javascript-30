var triggers = document.querySelectorAll('.cool > li');
var background = document.querySelector('.dropdownBackground');
var nav = document.querySelector('.top');

function handleEnter() {
    // console.log('enter', this);
    this.classList.add('trigger-enter');
    // setTimeout(function() { console.log(this); },1000)
    setTimeout( () => {
        if(this.classList.contains('trigger-enter') ) {
            this.classList.add('trigger-enter-active'), 150
        }
    });
    
    background.classList.add('open');

    var dropdown = this.querySelector('.dropdown');
    var dropdownCoords = dropdown.getBoundingClientRect();
    var navCoords = nav.getBoundingClientRect();
    console.log(dropdownCoords);

    var coords = {
        width:  dropdownCoords.width,
        height: dropdownCoords.height,
        top:    dropdownCoords.y - navCoords.top,
        left:   dropdownCoords.x - navCoords.left,
    }
    background.style.setProperty('width', `${coords.width}px` );
    background.style.setProperty('height', `${coords.height}px` );
    background.style.setProperty('top', `${coords.top}px`);
    background.style.setProperty('left', `${coords.left}px`);
    
}
function handleLeave() {
    // console.log('leave', this);
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    // setTimeout(function(){ console.log(this); }, 1000);
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

