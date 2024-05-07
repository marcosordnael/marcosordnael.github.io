
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
// Abrir Modal
function abrirModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  function fecharModal() {
    document.getElementById('modal').style.display = 'none';
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

// FUNÇÃO ENVIAR DADOS DO FORMULÁRIO PARA EMAIL
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
        // Recupera os dados do formulário
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var mensagem = document.getElementById("mensagem").value;

        // Cria um objeto FormData para enviar os dados
        var formData = new FormData();
        formData.append("nome", nome);
        formData.append("email", email);
        formData.append("telefone", telefone);
        formData.append("mensagem", mensagem);

        // Envia uma solicitação AJAX para o servidor PHP
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "form.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("E-mail enviado com sucesso!");
                // Limpa os campos do formulário após o envio
                document.getElementById("meuFormulario").reset();
            } else {
                alert("Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.");
            }
        };
        xhr.onerror = function() {
            alert("Erro de conexão. Por favor, verifique sua conexão com a internet e tente novamente.");
        };
        xhr.send(formData);

        // Retira o comportamento padrão de envio do formulário
        event.preventDefault();
    });
});
