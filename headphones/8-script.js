// Select elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Add click event listener
hamburgerMenu.addEventListener('click', () => {
    // Toggle active class
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});
