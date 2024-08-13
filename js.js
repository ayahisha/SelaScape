function openGoogleEarth() {
    window.open("https://earth.google.com/web/search/Giza,+Egypt/@29.9765,31.1313,0a,1000000d,35y,0h,0t,0r", "_blank");
}
function animateOnScroll(elements) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-in-bottom');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, {
        threshold: 0.1 // Adjust based on when you want the animation to trigger
    });

    elements.forEach((element) => {
        observer.observe(element);
    });
}

// Select all elements you want to animate
const elementsToAnimate = document.querySelectorAll('.animated-element');

// Apply animation on scroll
animateOnScroll(elementsToAnimate);