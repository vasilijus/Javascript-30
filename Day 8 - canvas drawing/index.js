var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height= (window.innerHeight - 50);


ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '20';
// ctx.globalCompositeOperation = 'multiply'; // Overlap colors


let isDrawing = false ;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
    if(!isDrawing) return; // Stop Drawing
// console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    // lastX = e.pageX ; lastY = e.pageY;
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if( hue >= 360 ) {
        hue = 0;
    }

    if( ctx.lineWidth >= 100 || ctx.lineWidth <= 1 ){
        direction = !direction;
    }
    if(direction) {
        ctx.lineWidth++;
    } else {
        ctx.lineWidth--;
    }

}
document.addEventListener('mousedown', (e) => {
     // lastX = e.offsetX ; lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    isDrawing = true;
});
document.addEventListener('mousemove', draw);

document.addEventListener('mouseup', () => isDrawing = false);
document.addEventListener('mouseout', () => isDrawing = false);
