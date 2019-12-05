const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){
    const linkscoords = this.getBoundingClientRect();
    console.log(linkscoords);
    let coords = {
        widht: linkscoords.width,
        height: linkscoords.height,
        top: linkscoords.top + window.scrollY,
        left: linkscoords.left + window.scrollX
    }
    console.log(coords)
    highlight.style.width   = `${linkscoords.width}px`;
    highlight.style.height  = `${linkscoords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
    // highlight.style.top     = `${linkscoords.top}px`;
    // highlight.style.left    = `${linkscoords.left}px`;
}

triggers.forEach( l => l.addEventListener('mouseenter', highlightLink) );