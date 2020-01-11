var divs = document.querySelectorAll('div');
var button = document.querySelector('button');

function logText(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // Stop bubling

}

divs.forEach(div => div.addEventListener('click',logText , {
    capture: true, // false => 3 ,2 ,1 / True => 1, 2, 3
}));

button.addEventListener('click', () => {
    console.log('Click');
},{
    once:true,
});