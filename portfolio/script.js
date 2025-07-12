// Highlight active section in navbar on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav .right a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Simple scroll reveal animation
const revealElements = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));

// Handle form submit (just print values)
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Name:', form.name.value);
    console.log('Email:', form.email.value);
    console.log('Message:', form.message.value);
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset();
});
