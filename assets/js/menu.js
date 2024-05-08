
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
// Abrir Janela 3
function abrirJanela() {
    document.getElementById('janela3').style.display = 'block';
  }
  
  function fecharJanela() {
    document.getElementById('janela3').style.display = 'none';
  }

// Abrir Janela 2
function abrirJanela2() {
    document.getElementById('janela2').style.display = 'block';
  }
  
  function fecharJanela2() {
    document.getElementById('janela2').style.display = 'none';
  }

// Abrir Janela 1
function abrirJanela1(){
    document.getElementById('janela1').style.display = 'block';
}
    function fecharJanela1(){
        document.getElementById('janela1').style.display = 'none';
    }
  

// ANIMAR ROLAGEM DA PAGINA
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Armazena a URL atual antes de enviar o formulário
var urlAtual = window.location.href;

// FORMULÁRIO
document.getElementById('meu-formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // faça que o formulário seja enviado normalmente
    // 
    exibirMensagemDeSucesso();
});

function exibirMensagemDeSucesso() {
    var formulario = document.getElementById('meu-formulario');
    var mensagemSucesso = document.getElementById('mensagem-sucesso');
    
    // Exibe a mensagem de sucesso
    mensagemSucesso.style.display = 'block'; 

    // Limpa os dados do formulário
    formulario.reset();

    // Redireciona o usuário para a URL armazenada após um pequeno atraso (por exemplo, 3 segundos)
    setTimeout(function() {
        window.location.href = urlAtual;
    }, 3000); // Tempo em milissegundos antes do redirecionamento
}
