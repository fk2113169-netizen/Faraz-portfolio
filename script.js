// Faraz Ahmed Portfolio - Interactive Features & Logic

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lucide Icons Initializer
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Navigation Scroll Header Class
    const header = document.querySelector('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.pointerEvents = 'auto';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.pointerEvents = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. Mobile Navigation Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMobileMenu = () => {
        mobileMenu.classList.toggle('hidden');
    };

    menuBtn.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
        if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // 4. Dark & Light Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    
    // Check saved theme or system default
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let currentTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', currentTheme);

    const updateThemeIcon = (theme) => {
        // Redraw icons using Lucide if needed
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };

    const toggleTheme = () => {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
        updateThemeIcon(currentTheme);
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);
    updateThemeIcon(currentTheme);

    // 6. Typwriter Headline Animation
    const words = ["AI Systems Engineer", "Agentic Workflow Developer", "SaaS Architect", "Vibe Coding Specialist"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterEl = document.getElementById('typewriter');

    const type = () => {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typewriterEl.textContent = currentWord.substring(0, charIndex);

        let typeSpeed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000; // pause at full word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 300; // wait before next word
        }

        setTimeout(type, typeSpeed);
    };

    setTimeout(type, 500);

    // 7. Scroll Reveal & Skill Progress Bar Trigger
    const revealElements = document.querySelectorAll('section, .reveal');
    revealElements.forEach(el => el.classList.add('reveal')); // Apply base class programmatically

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Trigger skill progress bars in this section
                const progressBars = entry.target.querySelectorAll('.animate-skill-progress');
                progressBars.forEach(bar => {
                    // Pull target width from parent inline CSS or define here
                    const widthVal = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = widthVal;
                    }, 50);
                });
                
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // 8. Project Sorting & Filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Set active class
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCat === filterValue) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    // 9. Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const formNotification = document.getElementById('form-notification');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameVal = document.getElementById('form-name').value.trim();
        const emailVal = document.getElementById('form-email').value.trim();
        const messageVal = document.getElementById('form-message').value.trim();

        if (!nameVal || !emailVal || !messageVal) {
            displayNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Simulating submission hook
        displayNotification('Sending message...', 'info');

        setTimeout(() => {
            displayNotification(`Thank you, ${nameVal}! Your message has been sent successfully.`, 'success');
            contactForm.reset();
        }, 1200);
    });

    const displayNotification = (msg, type) => {
        formNotification.classList.remove('hidden', 'bg-green-500/10', 'border-green-500/30', 'text-green-400', 'bg-red-500/10', 'border-red-500/30', 'text-red-400', 'bg-blue-500/10', 'border-blue-500/30', 'text-blue-400');
        
        if (type === 'success') {
            formNotification.classList.add('bg-green-500/10', 'border-green-500/30', 'text-green-400');
            formNotification.innerHTML = `<div class="flex items-center"><i data-lucide="check-circle" class="w-5 h-5 mr-2"></i><span>${msg}</span></div>`;
        } else if (type === 'error') {
            formNotification.classList.add('bg-red-500/10', 'border-red-500/30', 'text-red-400');
            formNotification.innerHTML = `<div class="flex items-center"><i data-lucide="alert-circle" class="w-5 h-5 mr-2"></i><span>${msg}</span></div>`;
        } else {
            formNotification.classList.add('bg-blue-500/10', 'border-blue-500/30', 'text-blue-400');
            formNotification.innerHTML = `<div class="flex items-center"><i data-lucide="loader" class="w-5 h-5 mr-2 animate-spin"></i><span>${msg}</span></div>`;
        }
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        formNotification.classList.remove('hidden');
    };
});
