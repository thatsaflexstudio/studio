document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight active navigation link
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 2. Language Initialization
    let currentLang = localStorage.getItem('siteLang') || 'en';
    applyLanguage(currentLang);

    // 3. Language Toggle Button Listener
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'es' : 'en';
            localStorage.setItem('siteLang', currentLang);
            applyLanguage(currentLang);
        });
    }

    // 4. Mobile Menu Logic
    const hamburger = document.getElementById('hamburger');
    const navLinksMenu = document.getElementById('navLinks');

    if (hamburger && navLinksMenu) {
        // Toggle menu on click
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinksMenu.classList.toggle('active-menu');
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinksMenu.classList.remove('active-menu');
            });
        });
    }
});

function applyLanguage(lang) {
    // Update Toggle Button Text
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        langBtn.textContent = lang === 'en' ? 'ESPAÑOL' : 'ENGLISH';
    }

    // Update standard text elements
    const elements = document.querySelectorAll('.lang-text');
    elements.forEach(el => {
        if (el.hasAttribute(`data-${lang}`)) {
            el.innerHTML = el.getAttribute(`data-${lang}`);
        }
    });

    // Update input placeholders
    const placeholders = document.querySelectorAll('.lang-placeholder');
    placeholders.forEach(el => {
        if (el.hasAttribute(`data-${lang}-placeholder`)) {
            el.placeholder = el.getAttribute(`data-${lang}-placeholder`);
        }
    });
}
