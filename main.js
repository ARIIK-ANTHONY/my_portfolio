document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill-card");
    
    skills.forEach(skill => {
        skill.addEventListener("mouseenter", () => {
            skill.style.transform = "scale(1.2)";
        });

        skill.addEventListener("mouseleave", () => {
            skill.style.transform = "scale(1)";
        });
    });
});

