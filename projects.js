// Array of project data
const projects = [
    {
      title: "Banking System",
      description:
        "A banking system project implemented in C++. This project demonstrates basic account management, deposits, withdrawals, and balance tracking.",
      link: "https://github.com/LukeFrandsen/Banking-System",
    },
    {
      title: "Network Connectivity",
      description:
        "Using Python I was able to connect through the network with an executable. I learned how to use sockets and threading for this project.",
      link: "https://github.com/LukeFrandsen/Network-connectivity",
    },
    {
      title: "Escape Room Game",
      description: "I made an escape room game in Vim, using C.",
      link: "https://github.com/LukeFrandsen/Escape-Room",
    },
  ];
  
  // Function to render projects
  const renderProjects = (filteredProjects = projects) => {
    const container = document.querySelector(".projects-container");
  
    // Clear any existing content
    container.innerHTML = "";
  
    // Populate the container with filtered projects
    filteredProjects.forEach((project) => {
      const projectDiv = document.createElement("div");
      projectDiv.className = "project";
  
      projectDiv.innerHTML = `
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn">View on GitHub</a>
      `;
  
      container.appendChild(projectDiv);
    });
  
    // If no projects match the search, display a message
    if (filteredProjects.length === 0) {
      container.innerHTML = "<p>No projects found.</p>";
    }
  };
  
  // Event listener for the search bar
  document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
  
    // Render all projects initially
    renderProjects();
  
    // Filter projects based on search input
    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
      const filteredProjects = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query)
      );
      renderProjects(filteredProjects);
    });
  });