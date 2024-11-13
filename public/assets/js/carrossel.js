let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.carousel-container');
    const totalSlides = document.querySelectorAll('.especialidades-box').length;
    const slideWidth = document.querySelector('.especialidades-box').offsetWidth + 20; // Inclui margem
    
    // Atualiza o slide atual com base na direção
    currentSlide += direction;

    // Looping do carrossel
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    // Move o carrossel
    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}
