const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const navMobileModal = document.querySelector('.nav-mobile-modal');

function toggleMenu() {
    menuOpen.classList.toggle('hidden');
    menuClose.classList.toggle('hidden');
    navMobileModal.classList.toggle('hidden');
}