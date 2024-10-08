document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll(".project .projectz");
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
    let currentProject = 0;

    // Function to initialize the project display
    function initProjectDisplay() {
        // Initially, make the first project visible
        projects.forEach((project, index) => {
            project.style.display = index === currentProject ? 'flex' : 'none'; // Show the first project, hide the rest
        });
    }

    // Function to show a project based on the current index
    function showProject(index) {
        projects.forEach((project, i) => {
            project.style.display = i === index ? 'flex' : 'none'; // Show the current project, hide others
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

    // Handle window resize
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1024) {
            showProject(currentProject); // Ensure the correct project is visible on resize
        } else {
            // Reset project display if the window is resized to a larger size
            projects.forEach((project) => {
                project.style.display = 'flex'; // Show all projects (or set as desired)
            });
        }
    });

    // Initial check for screen size and initialize display
    if (window.innerWidth < 1024) {
        initProjectDisplay(); // Initialize project display if screen is less than 1024px
    }
});
