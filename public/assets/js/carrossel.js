let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slides .especialidades-box');
    const totalSlides = slides.length;

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const slideWidth = slides[0].clientWidth;
    const gap = 50; // Espaço entre os slides (definido no CSS)
    const totalSlideWidth = slideWidth + gap;
    const containerWidth = document.querySelector('.carousel-container').clientWidth;
    const offset = -currentSlide * totalSlideWidth + (containerWidth - slideWidth) / 2;

    document.querySelector('.slides').style.transform = `translateX(${offset}px)`;
}

// Initialize the carousel
moveSlide(0);
