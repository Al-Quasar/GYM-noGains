var items = document.querySelectorAll('.slider-item');
var itemCount = items.length;
var nextItem = document.querySelector('.next');
var previousItem = document.querySelector('.previous');
var navItem = document.querySelector('a.toggle-nav');
var count = 0;
function showNextItem() {
    items[count].classList.remove('active');
    if (count < itemCount - 1) {
        count++;
    }
    else {
        count = 0;
    }
    items[count].classList.add('active');
    console.log(count);
}
function showPreviousItem() {
    items[count].classList.remove('active');
    if (count > 0) {
        count--;
    }
    else {
        count = itemCount - 1;
    }
    items[count].classList.add('active');
    // Check if working...
    console.log(count);
}
function toggleNavigation() {
    this.nextElementSibling.classList.toggle('active');
}
function keyPress(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        showPreviousItem();
    }
    else if (e.keyCode == '39') {
        showNextItem();
    }
}
nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);
document.addEventListener('keydown', keyPress);
navItem.addEventListener('click', toggleNavigation);
