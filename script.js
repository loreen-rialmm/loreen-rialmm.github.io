function changeColorMode() {
    const body = document.getElementById('body');
    const navbar = document.querySelector('.navbar');
    const icon = document.getElementById('btnColor');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        navbar.classList.remove('dark-mode');
        icon.classList.remove('bi-brightness-high');
        icon.classList.add('bi-moon');
        icon.style.color = '';
    } else {
        body.classList.add('dark-mode');
        navbar.classList.add('dark-mode');
        icon.classList.remove('bi-moon');
        icon.classList.add('bi-brightness-high');
        icon.style.color = '#F4EBCF';
    }
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
