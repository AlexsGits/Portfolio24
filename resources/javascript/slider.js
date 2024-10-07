const projects = document.querySelectorAll('.projects');
let currentIndex = 0;

function showProject(index) {
    const slider = document.querySelector('.slider');
    const projectWidth = projects[0].clientWidth;
    slider.style.transform = `translateX(-${index * projectWidth}px)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length; // loop back to the first project
    showProject(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length; // loop back to the last project
    showProject(currentIndex);
});

// Show the first project initially
showProject(currentIndex);
