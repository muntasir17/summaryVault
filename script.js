const toggleBtn = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

toggleBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
document.addEventListener("DOMContentLoaded", function () {
        const reveals = document.querySelectorAll(".reveal");

        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            reveals.forEach((el) => {
                const elementTop = el.getBoundingClientRect().top;
                const revealPoint = 80;

                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add("active");
                }
            });
        };

        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    });
const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false 
    });

    sr.reveal('.sr-title', {
        origin: 'bottom',
        delay: 200
    });

    sr.reveal('.sr-desc', {
        origin: 'bottom',
        delay: 400
    });

    sr.reveal('.sr-btn', {
        origin: 'bottom',
        delay: 600
    });

    sr.reveal('.sr-card', {
        origin: 'right',
        distance: '80px',
        delay: 700
    });












