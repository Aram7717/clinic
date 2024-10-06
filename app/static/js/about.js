// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth'});
    });
});

// Scroll reveal effect
window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about-section');
    const mapSection = document.getElementById('map-section');
   
    if (window.scrollY > aboutSection.offsetTop - window.innerHeight / 1.5) {
        aboutSection.style.opacity = 1;
        aboutSection.style.transform = "translateY(0)";
    }
    if (window.scrollY > mapSection.offsetTop - window.innerHeight / 1.5) {
        mapSection.style.opacity = 1;
        mapSection.style.transform = "translateY(0)";
    }
});
