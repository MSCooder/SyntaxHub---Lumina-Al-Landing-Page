// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Navbar ki height minus karne ke liye (taake heading chhup na jaye)
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - (navbarHeight + 20);

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the "active" class to show/hide menu
    navLinks.classList.toggle('active');
    
    // Optional: Animate hamburger to X
    hamburger.classList.toggle('toggle');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero__content');
    const heroImage = document.querySelector('.hero__image');

    // Simple Entrance Animation
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(30px)';
    
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'scale(0.9)';

    setTimeout(() => {
        heroContent.style.transition = 'all 1s ease-out';
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 200);

    setTimeout(() => {
        heroImage.style.transition = 'all 1.2s ease-out';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'scale(1)';
    }, 500);
});

const observeAbout = () => {
    const aboutSection = document.querySelector('.about__container');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.2 });

    // Initial State for animation
    aboutSection.style.opacity = '0';
    aboutSection.style.transform = 'translateY(50px)';
    aboutSection.style.transition = 'all 0.8s ease-out';
    
    observer.observe(aboutSection);
};

document.addEventListener('DOMContentLoaded', observeAbout);

const animateFeatures = () => {
    const cards = document.querySelectorAll('.feature-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Delay each card slightly for a staggering effect
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
};

document.addEventListener('DOMContentLoaded', animateFeatures);

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = document.querySelector('.submit-btn span');
    const originalText = btn.innerText;
    
    // Simple Loading Effect
    btn.innerText = 'Processing...';
    
    setTimeout(() => {
        btn.innerText = 'Success! Welcome to Lumina AI';
        this.reset(); // Form clear kar dega
        
        setTimeout(() => {
            btn.innerText = originalText;
        }, 3000);
    }, 1500);
});

document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    alert(`Thank you for subscribing, ${email}!`);
    this.reset();
});