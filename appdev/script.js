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


