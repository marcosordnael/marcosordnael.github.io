// FORMULÁRIO
function formulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const urlServidor = 'https://servidor-firebase.onrender.com/enviar-dados';  // URL correta do Render

    // Dados que serão enviados para o servidor
    const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    // Enviar dados para o servidor
    fetch(urlServidor, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensagem === 'Dados salvos com sucesso!') {
            exibirMensagemDeSucesso();
        } else {
            console.error('Erro ao salvar os dados:', data.erro);
        }
    })
    .catch(error => {
        console.error('Erro ao enviar os dados:', error);
    });

    event.target.reset();
}

window.formulario = formulario;

function exibirMensagemDeSucesso() {
    var formularioElement = document.getElementById('meu-formulario');
    var mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.style.display = 'block';
}
