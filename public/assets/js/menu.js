
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





// FORMULÁRIO
function formulario(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;

  
  const contatosRef = ref(db, 'contatos');

  
  const novoContatoRef = push(contatosRef);

  
  const novoContatoKey = novoContatoRef.key;

  
  const chaveContato = `${nome}_${novoContatoKey}`;

 
  set(ref(db, `contatos/${chaveContato}`), {
      nome: nome,
      email: email,
      telefone: telefone,
      mensagem: mensagem
  });

 
  event.target.reset();
  exibirMensagemDeSucesso();
}


window.formulario = formulario;

function exibirMensagemDeSucesso() {
    var formularioElement = document.getElementById('meu-formulario');
    var mensagemSucesso = document.getElementById('mensagem-sucesso');
    
   
    mensagemSucesso.style.display = 'block'; 

  
}


