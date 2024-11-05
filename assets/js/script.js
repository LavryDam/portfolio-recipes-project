// Efecto de aparición en las secciones al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const revealSection = () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const triggerBottom = window.innerHeight * 0.9;
            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', revealSection);
    revealSection();
});
