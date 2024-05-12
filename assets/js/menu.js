
import {db, set, push, ref} from "./configFirebase.js"

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




// FORMULÁRIO
function formulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  // Obtém uma referência para a lista de contatos
  const contatosRef = ref(db, 'contatos');

  // Adiciona um novo contato à lista utilizando push com a chave personalizada
  const novoContatoRef = push(contatosRef);

  // Obter a chave única gerada pelo Firebase
  const novoContatoKey = novoContatoRef.key;

  // Combine o nome com o número sequencial para criar a chave do contato
  const chaveContato = `${nome}_${novoContatoKey}`;

  // Define os dados do novo contato usando a chave personalizada
  set(ref(db, `contatos/${chaveContato}`), {
      nome: nome,
      email: email,
      telefone: telefone,
      mensagem: mensagem
  });

  // Limpa os dados do formulário
  event.target.reset();
}


window.formulario = formulario;

function exibirMensagemDeSucesso() {
    var formularioElement = document.getElementById('meu-formulario');
    var mensagemSucesso = document.getElementById('mensagem-sucesso');
    
    // Exibe a mensagem de sucesso
    mensagemSucesso.style.display = 'block'; 

    // Limpa os dados do formulário
    formularioElement.reset();
}

