// This file is intentionally left blank.

// Update the current year in the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for internal navigation links only
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Explicitly exclude mailto links
    if (anchor.href.includes('mailto:')) return;
    
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Account for header height
                behavior: 'smooth'
            });
        }
    });
});

// Ensure mailto links work properly
document.querySelectorAll('a[href^="mailto:"]').forEach(mailtoLink => {
    mailtoLink.addEventListener('click', function(e) {
        // Don't prevent default for mailto links
        // This is just to ensure they work as expected
        console.log('Mailto link clicked:', this.href);
    });
});

// Add active class to navigation links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Fade in elements when they come into view
const revealElements = document.querySelectorAll('.section');

const fadeInOnScroll = () => {
    const scrollY = window.scrollY;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const windowHeight = window.innerHeight;
        
        if (scrollY > elementTop - windowHeight + 100) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// Add a CSS class to handle the fade-in effect
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .section.visible {
            opacity: 1;
            transform: translateY(0);
        }
        nav ul li a.active {
            color: var(--primary-color);
        }
        nav ul li a.active::after {
            width: 100%;
        }
    `;
    document.head.appendChild(style);
});

// Mobile navigation toggle
const createMobileNav = () => {
    // Only create mobile nav if it doesn't exist and window width is small enough
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-nav-toggle')) {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create toggle button
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('mobile-nav-toggle');
        toggleButton.innerHTML = '<i class="fas fa-bars"></i>';
        toggleButton.setAttribute('aria-label', 'Toggle navigation');
        
        // Add toggle functionality
        toggleButton.addEventListener('click', () => {
            nav.classList.toggle('active');
            const isOpen = nav.classList.contains('active');
            toggleButton.innerHTML = isOpen ? 
                '<i class="fas fa-times"></i>' : 
                '<i class="fas fa-bars"></i>';
        });
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            @media (max-width: 768px) {
                .mobile-nav-toggle {
                    display: block;
                    background: transparent;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--dark-color);
                    z-index: 1000;
                }
                
                nav {
                    display: none;
                }
                
                nav.active {
                    display: block;
                    position: absolute;
                    top: 70px;
                    left: 0;
                    right: 0;
                    background: white;
                    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                }
                
                nav.active ul {
                    flex-direction: column;
                    padding: 1rem 0;
                }
                
                nav.active ul li {
                    margin: 0.5rem 0;
                    text-align: center;
                }
            }
            
            @media (min-width: 769px) {
                .mobile-nav-toggle {
                    display: none;
                }
                
                nav {
                    display: block !important;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Insert button before nav in header
        header.insertBefore(toggleButton, nav);
    }
};

// Initialize mobile nav
window.addEventListener('load', createMobileNav);
window.addEventListener('resize', createMobileNav);