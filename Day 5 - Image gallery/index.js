const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    console.log(e)
}

panels.forEach( panel => panel.addEventListener('click',toggleOpen));
