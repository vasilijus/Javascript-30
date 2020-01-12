
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('Plates') ) || [];

function addItem(e) {
    e.preventDefault();
    // console.info(this);
    var text = (this.querySelector('[name=item]')).value
    // console.info(text)
    var item = {
        text,
        done: false,
    }
    items.push(item);
    populateList(items, itemsList);

    localStorage.setItem('Plates', JSON.stringify(items));
    
    console.log(items)
    this.reset();
}

function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map( (plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item-${i}" ${plate.done ? 'checked' : '' } />
                <label for="item-${i}">${plate.text}</label>
            </li>
        `;
    }).join("");
}
function toogleDone(e) {
    if ( !e.target.matches('input') ) return // if it isn't input type
    var el = e.target;
    var index = el.dataset.index;
    items[index].done = !false;
    localStorage.setItem('Plates', JSON.stringify(items) );
}
populateList(items, itemsList);

itemsList.addEventListener('click', toogleDone);

addItems.addEventListener('submit', addItem);

var checkboxes = document.querySelectorAll('input=[type');

console.log(window.localStorage);