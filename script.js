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
        
        // Notify particle canvas
        if (typeof initParticles === 'function') {
            initParticles();
        }
    };

    themeToggle.addEventListener('click', toggleTheme);
    themeToggleMobile.addEventListener('click', toggleTheme);
    updateThemeIcon(currentTheme);

    // 5. Interactive Particle Network Canvas
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const mouse = {
        x: null,
        y: null,
        radius: 150
    };

    // Cache metrics to avoid layout thrashing
    let headerHeight = header ? header.offsetHeight : 80;

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y - (headerHeight / 2); // adjust for header offset
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }

        update() {
            // Check canvas boundaries
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Move particle
            this.x += this.directionX;
            this.y += this.directionY;

            // Draw particle
            this.draw();
        }
    }

    const initParticles = () => {
        particles = [];
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
        
        const particleColor = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(2, 132, 199, 0.3)';
        
        for (let i = 0; i < particleCount; i++) {
            const size = (Math.random() * 2) + 1;
            const x = (Math.random() * ((canvas.width - size * 2) - (size * 2))) + size * 2;
            const y = (Math.random() * ((canvas.height - size * 2) - (size * 2))) + size * 2;
            const directionX = (Math.random() * 0.4) - 0.2;
            const directionY = (Math.random() * 0.4) - 0.2;

            particles.push(new Particle(x, y, directionX, directionY, size, particleColor));
        }
    };

    const connectParticles = () => {
        const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
        const lineColor = isDark ? 'rgba(56, 189, 248, 0.08)' : 'rgba(2, 132, 199, 0.08)';
        const mouseLineColor = isDark ? 'rgba(56, 189, 248, 0.18)' : 'rgba(2, 132, 199, 0.15)';
        
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const dx = particles[a].x - particles[b].x;
                const dy = particles[a].y - particles[b].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 110) {
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }

            // Connect to mouse
            if (mouse.x !== null && mouse.y !== null) {
                const mX = mouse.x - canvasRect.left;
                const mY = mouse.y - canvasRect.top;
                const dx = particles[a].x - mX;
                const dy = particles[a].y - mY;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    ctx.strokeStyle = mouseLineColor;
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(mX, mY);
                    ctx.stroke();
                }
            }
        }
    };

    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        connectParticles();
        animationFrameId = requestAnimationFrame(animateParticles);
    };

    let canvasRect = canvas.getBoundingClientRect();

    const resizeCanvas = () => {
        const parent = canvas.parentElement;
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        canvasRect = canvas.getBoundingClientRect();
        headerHeight = header ? header.offsetHeight : 80;
        initParticles();
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('scroll', () => {
        canvasRect = canvas.getBoundingClientRect();
    }, { passive: true });
    
    resizeCanvas();
    animateParticles();

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
