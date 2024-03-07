document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('show'); 
        hamburgerMenu.classList.toggle('close');
    });

    // untuk hide navbar
    navbar.classList.remove('show');
});