// Mobile navbar toggle functionality
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

// Close navbar when scrolling
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Theme toggle functionality
const toggleSwitch = document.getElementById('theme-toggle');

// Check if the user has a saved preference in localStorage
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    toggleSwitch.checked = true;
} else {
    document.body.classList.add('dark-mode');
}

// Toggle theme when the switch is clicked
toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});
