document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-circle");
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const filter = this.dataset.filter;
  
        projects.forEach((project) => {
          const category = project.dataset.category;
          if (filter === "all" || category === filter) {
            project.style.display = "flex";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });
  