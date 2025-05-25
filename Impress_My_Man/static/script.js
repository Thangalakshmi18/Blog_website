// static/script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Memory Card Flip Effect
    const memoryCards = document.querySelectorAll('.memory-card');

    memoryCards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    // 2. Reveal Sections/Items on Scroll
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // When 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: Stop observing once element is visible
                // observer.unobserve(entry.target);
            } else {
                // Optional: Remove class if element scrolls out of view
                // entry.target.classList.remove('is-visible');
            }
        });
    }, observerOptions);

    // Observe content sections
    document.querySelectorAll('.content-section').forEach(section => {
        observer.observe(section);
    });

    // Observe individual memory cards for finer control
    document.querySelectorAll('.memory-card').forEach(card => {
        observer.observe(card);
    });

    // Observe individual quality items
    document.querySelectorAll('.quality-item').forEach(item => {
        observer.observe(item);
    });

    // Initial fade-in for header
    document.querySelector('header').classList.add('fade-in');
    document.getElementById('introduction').classList.add('fade-in'); // Also fade in intro
});