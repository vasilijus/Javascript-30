const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

const walk = 500; // px

function shadow(e) {
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x , offsetY: y } = e;
    
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }
    // console.log( x, y);
    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (y / height * walk) - (walk / 2);
    // console.log(xWalk, yWalk);
    // text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 green,
    ${xWalk}px ${yWalk * -1}px 0 blue,
    ${xWalk * -1}px ${yWalk * -1}px 0 yellow
    `;

}

hero.addEventListener('mousemove', shadow);