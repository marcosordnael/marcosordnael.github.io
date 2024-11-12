// Variáveis globais
let slideIndex = 0;
const slides = document.querySelectorAll('.especialidades-box');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth; 

// Função para mover os slides
function moveSlide(n) {
    slideIndex += n;

    // Verificar limites
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    } else if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    const moveAmount = -slideIndex * slideWidth;
    document.querySelector('.slides').style.transform = `translateX(${moveAmount}px)`;
}

// Event listeners para os botões de navegação
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
