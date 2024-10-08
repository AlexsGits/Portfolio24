document.addEventListener("DOMContentLoaded", function() {
    // Select all project containers with the class "projects"
    const projects = document.querySelectorAll(".project .projectz"); // Select projects within project containers
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    let currentProject = 0;

    // Initially, make the first project visible
    projects[currentProject].style.display = 'block'; // Show the first project

    // Function to show a project based on the current index
    function showProject(index) {
        projects.forEach((project, i) => {
            if (i === index) {
                project.style.display = 'flex'; // Show the current project
            } else {
                project.style.display = 'none'; // Hide the other projects
            }
        });
    }

    // Click event for the right arrow
    rightArrow.addEventListener("click", () => {
        console.log("Right arrow clicked"); // Debugging log
        currentProject = (currentProject + 1) % projects.length; // Increment index
        showProject(currentProject); // Show the new project
    });

    // Click event for the left arrow
    leftArrow.addEventListener("click", () => {
        console.log("Left arrow clicked"); // Debugging log
        currentProject = (currentProject - 1 + projects.length) % projects.length; // Decrement index
        showProject(currentProject); // Show the new project
    });
});
