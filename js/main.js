const burger    = document.querySelector('.media-btn');
const menu      = document.querySelector('.menu-list'); 

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-list--active');
})
