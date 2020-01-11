var slider = document.querySelector('.items');
var isDown = false;
var startX;
var scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log(startX)
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
    console.log(isDown)
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
    console.log(isDown)
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return; // stop the fn from running
    e.preventDefault();

    var x = e.pageX - slider.offsetLeft;
    var walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk)

    // console.log('work'); 
});
