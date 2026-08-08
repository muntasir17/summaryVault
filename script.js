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
                const revealPoint = 80; // স্ক্রিনের ৮০ পিক্সেল কাছে আসলে অ্যানিমেশন স্টার্ট হবে

                if (elementTop < windowHeight - revealPoint) {
                    el.classList.add("active");
                }
            });
        };

        // স্ক্রোল করলে এবং পেজ প্রথমবার লোড হলেই চেক করবে
        window.addEventListener("scroll", revealOnScroll);
        revealOnScroll();
    });
const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false // একবার স্ক্রোল করলে অ্যানিমেশন ফিক্সড থাকবে
    });

    sr.reveal('.sr-title', {
        origin: 'bottom',
        delay: 200
    });

    // প্যারাগ্রাফ আরও একটু পরে নিচ থেকে আসবে
    sr.reveal('.sr-desc', {
        origin: 'bottom',
        delay: 400
    });

    // বাটনগুলো ৪ নম্বর ধাপে আসবে
    sr.reveal('.sr-btn', {
        origin: 'bottom',
        delay: 600
    });

    // ডানপাশের কার্ডটি ডান দিক থেকে স্মুথভাবে স্লাইড হয়ে আসবে
    sr.reveal('.sr-card', {
        origin: 'right',
        distance: '80px',
        delay: 700
    });