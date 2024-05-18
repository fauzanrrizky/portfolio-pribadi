function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function filterProjects(tool) {
  const projects = document.querySelectorAll('.details-container');
  projects.forEach(project => {
    if (tool === 'all' || project.getAttribute('category').includes(tool)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
  