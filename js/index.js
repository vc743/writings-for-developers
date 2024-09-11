const hamburgerMenu = document.querySelector('.nav__menu');
const hamburgerIcon = document.querySelector('.fa-bars');
const navList = document.querySelector('.nav__list');
let isOpen = false;

hamburgerMenu.addEventListener('click', () => {

    hamburgerIcon.classList.toggle('fa-xmark');
    
    if(!isOpen){
        navList.style.transform = 'translate(0)';
    }else{
        navList.style.transform = 'translate(-100%)';
    }

    isOpen = !isOpen;

});