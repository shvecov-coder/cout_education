const burger    = document.querySelector('.media-btn');
const menu      = document.querySelector('.menu-list'); 
// const sblock    = document.querySelector('.sblock');
// const appPage   = document.querySelector('.app');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-list--active');
})



// window.addEventListener('resize', () => {
//     let screenWidth = document.documentElement.clientWidth;
//     let screenHeight = document.documentElement.clientHeight;
//     if (screenWidth < 360 || screenHeight < 400) {
//         sblock.setAttribute('style', 'display: flex;');
//         appPage.setAttribute('style', 'display: none;');
//     }
//     else {
//         sblock.setAttribute('style', 'display: none;');
//         appPage.setAttribute('style', 'display: block;');
//     }
// })

