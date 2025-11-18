// dp_script.js

// Select the hamburger and nav menu
const hamburger = document.querySelector('.dp-hamburger');
const navMenu = document.querySelector('.dp-nav-menu');

// Toggle menu on click
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked (mobile)
const navLinks = document.querySelectorAll('.dp-nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});
