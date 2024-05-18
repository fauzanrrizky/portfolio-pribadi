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

// Open the modal
function openModal(imgElement) {
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("img");
  modal.style.display = "block";
  modalImg.src = imgElement.src;
}

// Close the modal
function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
  