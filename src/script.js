// Display dynamic server and Docker info
document.addEventListener('DOMContentLoaded', () => {

    // Show current date/time in footer
    const dockerInfo = document.getElementById('dockerInfo');
    if (dockerInfo) {
        const now = new Date();
        dockerInfo.textContent = `Page loaded at: ${now.toLocaleString()} | Container: nginx-portfolio`;
    }

    // Animate skill cards on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.skill-card, .project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Smooth highlight on active nav link
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
        });
    });

    console.log('%c🐳 Running inside Docker + Nginx!', 'color: #00d4ff; font-size: 16px; font-weight: bold;');
    console.log('%cCodeAlpha DevOps Internship — Task 4', 'color: #8b949e; font-size: 12px;');
});
