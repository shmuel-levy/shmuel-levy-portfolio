document.addEventListener('DOMContentLoaded', function() {
    const navLinksContainer = document.querySelector('.nav-link-container');
    const menuHamburger = document.querySelector('.menu-hamburger');
    const barMenus = document.querySelectorAll('.bar-menu');

    menuHamburger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        menuHamburger.classList.toggle('active');
    });

    const mobileNavLinks = document.querySelectorAll('.nav-link-container a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
            menuHamburger.classList.remove('active');
        });
    });

    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    const header = document.querySelector('header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }

        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            if (scrollTop > 100) {
                header.style.background = 'rgba(26, 32, 44, 0.98)';
            } else {
                header.style.background = 'rgba(26, 32, 44, 0.95)';
            }
        }

        lastScrollTop = scrollTop;
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links-container .nav-text, .nav-link-container .nav-text');

    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = header.offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});