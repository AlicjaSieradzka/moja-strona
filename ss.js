const toggleBtn = document.getElementById('theme-toggle');


if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}