// FORMULÁRIO
function formulario(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const mensagem = document.getElementById("mensagem").value;

    const dados = {
        nome: nome,
        email: email,
        telefone: telefone,
        mensagem: mensagem
    };

    
    
    fetch('https://servidor-firebase.vercel.app/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Erro ao enviar dados");
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        event.target.reset();
        exibirMensagemDeSucesso();
    })
    .catch(err => {
        console.error(err);
        alert("Ocorreu um erro. Tente novamente.");
    });
}

window.formulario = formulario;

function exibirMensagemDeSucesso() {
    var mensagemSucesso = document.getElementById('mensagem-sucesso');
    mensagemSucesso.style.display = 'block';
}



