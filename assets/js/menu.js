
let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overLay = document.getElementById('overlay-menu')
let btnFechar = document.getElementById('btn-fechar')


btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})
overLay.addEventListener('click' , ()=>{
    menu.classList.remove('abrir-menu')
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// FUNÇÃO ENVIAR DADOS DO FORMULÁRIO PARA EMAIL
