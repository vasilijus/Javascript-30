var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';

let isDrawing = false ;
let lastX = 0;
let lastY = 0;

function draw(e) {
    if(!isDrawing) return;
console.log(e)
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // lastX = e.pageX ; lastY = e.pageY;
    [lastX, lastY] = [e.offsetX, e.offsetY];

}
document.addEventListener('mousedown', (e) => {
    isDrawing = true
    [lastX, lastY] = [e.offsetX, e.offsetY];
    // lastX = e.offsetX ; lastY = e.offsetY;
});
document.addEventListener('mousemove', draw);

document.addEventListener('mouseup', () => isDrawing = false);
document.addEventListener('mouseout', () => isDrawing = false);
