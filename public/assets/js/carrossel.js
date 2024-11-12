const slidesContainer = document.querySelector('.carousel-container');
const slides = Array.from(document.querySelectorAll('.especialidades-box'));
const totalSlides = slides.length;
let currentSlide = 0;

// Duplicar os slides para continuidade
slides.forEach(slide => {
    const clone = slide.cloneNode(true);
    slidesContainer.appendChild(clone); // Clona no final
});

// Calcula a largura de cada slide, incluindo margens
const slideWidth = slides[0].offsetWidth + 20; // Inclui a margem entre os cards
const visibleSlides = Math.floor(slidesContainer.offsetWidth / slideWidth);

// Posiciona o carrossel no primeiro slide
slidesContainer.style.transform = `translateX(0px)`;

function moveSlide(direction) {
    currentSlide += direction;
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;

    slidesContainer.addEventListener('transitionend', () => {
        // Se for além do último slide duplicado
        if (currentSlide >= totalSlides) {
            slidesContainer.style.transition = 'none';
            currentSlide = 0;
            slidesContainer.style.transform = `translateX(0px)`;
        }

        // Se for para a esquerda antes do primeiro slide
        if (currentSlide < 0) {
            slidesContainer.style.transition = 'none';
            currentSlide = totalSlides - visibleSlides;
            slidesContainer.style.transform = `translateX(${-slideWidth * currentSlide}px)`;
        }
    });
}
