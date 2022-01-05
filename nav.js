var clicked = false;

function nav() {
    var menu = document.getElementById('menu-ikon');
    if (clicked !== true) {
        menu.setAttribute('class', 'fas fa-swords')
        clicked = true;
        menuBuka();
    } else {
        menu.setAttribute('class', 'fas fa-burger')
        clicked = false;
        menuTutup();
    }
}

var list = document.querySelector('.menu-lists');

function menuBuka() {
    setTimeout(() => {
        list.style.right = '0';
    })
}

function menuTutup() {
    setTimeout(() => {
        list.style.right = '-157.844px';
    })
}
document.querySelector('.navz-logo').onclick = () => {
    window.location.href = "./index.html"
}
document.querySelector('.navz-login a[title="YOUTUBE"]').onclick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}
document.querySelector('.menu-lists a[title="YOUTUBE"]').onclick = () => {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}