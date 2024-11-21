function showPhotoshopCards() {
    const photoshopCards = document.getElementById('photoshopCards');

    photoshopCards.classList.toggle('visible');
}

function showTraditionalCards() {
    const photoshopCards = document.getElementById('photoshopCards');

    traditionalCards.classList.toggle('visible');
}

function toggleDigitalSection() {
    var section = document.getElementById("digitalSection");
    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

var colorMode = "light";
function changeColorMode() {
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const btnColor = document.getElementById('btnColor');

    if (colorMode === "light") {
        body.setAttribute("data-bs-theme", "dark");
        navbar.classList.add('dark-mode');
        navLinks.forEach(link => link.classList.add('dark-mode'));
        btnColor.innerHTML = "Light";
        colorMode = "dark";
    } else {
        body.setAttribute("data-bs-theme", "light");
        navbar.classList.remove('dark-mode');
        navLinks.forEach(link => link.classList.remove('dark-mode'));
        btnColor.innerHTML = "Dark";
        colorMode = "light";
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
