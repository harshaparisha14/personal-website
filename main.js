// Main JavaScript for Harsha Parisha's Personal Website

document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Form submission is handled by FormSubmit.co
    // Show thank you message if redirected from form submission
    window.addEventListener('load', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const message = urlParams.get('message');
        
        if (message) {
            // Create a notification element
            const notification = document.createElement('div');
            notification.className = 'form-notification';
            notification.textContent = decodeURIComponent(message);
            
            // Add the notification to the page
            document.body.appendChild(notification);
            
            // Auto-remove after 5 seconds
            setTimeout(function() {
                notification.style.opacity = '0';
                setTimeout(function() {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 500);
            }, 5000);
            
            // Remove the query parameter from the URL without refreshing
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    });
    // Mobile Navigation Toggle
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        
        // Burger Animation
        burger.classList.toggle('toggle');
    });
    
    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
                
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar background change on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '1rem 5%';
            navbar.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.padding = '1.5rem 5%';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // Skills Tab Navigation
    const skillTabs = document.querySelectorAll('.skill-tab');
    const skillCategories = document.querySelectorAll('.skills-category');
    
    skillTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            skillTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Hide all skill categories
            skillCategories.forEach(category => {
                category.classList.remove('active');
            });
            
            // Show the corresponding category
            const categoryId = tab.getAttribute('data-category');
            document.getElementById(categoryId).classList.add('active');
        });
    });
    
    // Animate skill progress bars on scroll
    const animateSkills = () => {
        const skillsSectionPosition = document.querySelector('.skills').getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (skillsSectionPosition < screenPosition) {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            
            // Remove the scroll event once animation has played
            window.removeEventListener('scroll', animateSkills);
        }
    };
    
    window.addEventListener('scroll', animateSkills);
    
    // Edit Skills Functionality
    const editSkillsBtn = document.querySelector('.edit-skills-btn');
    
    if (editSkillsBtn) {
        editSkillsBtn.addEventListener('click', () => {
            // This is where you would implement the skill editing functionality
            // For now, we'll just show an alert
            alert('Skill editing functionality would be implemented here. This would allow changing skill levels, adding or removing skills, etc.');
            
            // In a real implementation, you might show a modal or form to edit skills
            // const skillCards = document.querySelectorAll('.skill-card');
            // skillCards.forEach(card => {
            //     // Make each card editable
            //     // Add edit controls, etc.
            // });
        });
    }
    
    // Edit Experience Functionality
    const editExperienceBtn = document.querySelector('.edit-experience-btn');
    
    if (editExperienceBtn) {
        editExperienceBtn.addEventListener('click', () => {
            // This is where you would implement the experience editing functionality
            // For now, we'll just show an alert
            alert('Experience editing functionality would be implemented here. This would allow adding new experiences, editing existing ones, or removing entries.');
            
            // In a real implementation, you might show a modal or form to edit experiences
            // const experienceCards = document.querySelectorAll('.timeline-card');
            // experienceCards.forEach(card => {
            //     // Make each card editable
            //     // Add edit controls, etc.
            // });
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real implementation, you would send this data to a server or email service
            // For now, we'll just show a success message
            alert(`Thank you for your message, ${name}! I'll get back to you at ${email} as soon as possible.`);
            
            // Reset the form
            contactForm.reset();
        });
    }
    
    // Resume Download Button
    const downloadResumeBtn = document.querySelector('.download-btn');
    
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            // In a real implementation, this would download an actual PDF file
            // For now, we'll just show a message
            alert('Resume download would be implemented here. This would link to an actual PDF file.');
        });
    }
    
    // Projects Carousel Functionality
    const projectsCarousel = document.querySelector('.projects-carousel');
    const projectCards = document.querySelectorAll('.project-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    if (projectsCarousel && projectCards.length > 0) {
        let currentIndex = 0;
        const totalProjects = projectCards.length;
        
        // Initialize carousel
        updateCarousel();
        
        // Next button click event
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalProjects;
            updateCarousel();
        });
        
        // Previous button click event
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
            updateCarousel();
        });
        
        // Indicator click events
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentIndex = index;
                updateCarousel();
            });
        });
        
        // Function to update carousel display
        function updateCarousel() {
            // Update cards
            projectCards.forEach((card, index) => {
                card.classList.remove('active', 'prev');
                
                if (index === currentIndex) {
                    card.classList.add('active');
                } else if (index === (currentIndex - 1 + totalProjects) % totalProjects) {
                    card.classList.add('prev');
                }
                
                // Position the cards
                if (index === currentIndex) {
                    card.style.transform = 'translateX(0)';
                    card.style.opacity = '1';
                    card.style.zIndex = '2';
                } else if (index === (currentIndex - 1 + totalProjects) % totalProjects) {
                    card.style.transform = 'translateX(-100%)';
                    card.style.opacity = '0';
                    card.style.zIndex = '1';
                } else if (index === (currentIndex + 1) % totalProjects) {
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    card.style.zIndex = '1';
                } else {
                    card.style.transform = 'translateX(100%)';
                    card.style.opacity = '0';
                    card.style.zIndex = '0';
                }
            });
            
            // Update indicators
            indicators.forEach((indicator, index) => {
                indicator.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Auto rotate carousel
        setInterval(() => {
            currentIndex = (currentIndex + 1) % totalProjects;
            updateCarousel();
        }, 5000); // Change slide every 5 seconds
    }
});
