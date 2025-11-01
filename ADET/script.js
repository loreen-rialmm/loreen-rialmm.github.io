function showProject(projectId) {
    const allProjects = document.querySelectorAll('.info-content');
    allProjects.forEach(project => {
        project.classList.remove('active'); 
    });

    const selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.classList.add('active'); 
    }

    const allTitles = document.querySelectorAll('.projects-list li');
    allTitles.forEach(title => {
        title.classList.remove('active-title');
    });

    const selectedTitle = document.querySelector(`.projects-list li[onclick="showProject('${projectId}')"]`);
    if (selectedTitle) {
        selectedTitle.classList.add('active-title');
    }
}

// --- Project switching logic ---
function showProject(projectId) {
    const allProjects = document.querySelectorAll('.info-content');
    allProjects.forEach(project => project.classList.remove('active'));

    const selectedProject = document.getElementById(projectId);
    if (selectedProject) {
        selectedProject.classList.add('active');
    }

    const allTitles = document.querySelectorAll('.projects-list li');
    allTitles.forEach(title => title.classList.remove('active-title'));

    const selectedTitle = document.querySelector(`.projects-list li[onclick="showProject('${projectId}')"]`);
    if (selectedTitle) {
        selectedTitle.classList.add('active-title');
    }
}

// --- Scroll and keyboard navigation ---
let currentIndex = 0;
const projectIds = Array.from(document.querySelectorAll('.info-content')).map(p => p.id);

// initialize the first project
showProject(projectIds[currentIndex]);

let canScroll = true; // prevent rapid switching
function switchProject(direction) {
    if (!canScroll) return;
    canScroll = false;
    setTimeout(() => canScroll = true, 700); // short cooldown to prevent spam

    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % projectIds.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + projectIds.length) % projectIds.length;
    }
    showProject(projectIds[currentIndex]);
}

// Mouse wheel scroll
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        switchProject('next');
    } else {
        switchProject('prev');
    }
});

// Keyboard arrows
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
        switchProject('next');
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
        switchProject('prev');
    }
});



