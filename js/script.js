document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    }

    if (closeMenuBtn && mobileMenu) {
        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    }

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('.mobile-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
    });

    // --- Navbar Effect on Scroll ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-4', 'bg-bgmain/95');
            navbar.classList.remove('py-6', 'bg-bgmain/90');
        } else {
            navbar.classList.add('py-6', 'bg-bgmain/90');
            navbar.classList.remove('py-4', 'bg-bgmain/95');
        }
    });

    // --- Simple Scroll Reveal (Optional but nice) ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);

    // Initial state for reveal elements
    const revealElements = document.querySelectorAll('section > div, .bg-cardbg');
    revealElements.forEach(el => {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
    });
});
