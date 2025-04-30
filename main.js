const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
});

const backToTopBtn = document.createElement('button');
backToTopBtn.textContent = '↑ Top';
backToTopBtn.id = 'backToTop';
document.body.appendChild(backToTopBtn);

backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    padding: 10px 15px;
    font-size: 16px;
    background: #0073e6;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: none;
    z-index: 1000;
`;

window.addEventListener('scroll', () => {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const footerDate = document.querySelector('footer p');
if (footerDate) {
    const now = new Date();
    footerDate.textContent = `Last Updated: April ${now.getFullYear()}`;
}
