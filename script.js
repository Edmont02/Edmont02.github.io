// Mobile navbar toggle functionality
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// Close navbar when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
}