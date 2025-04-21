
import { db, set, push, ref } from "./configFirebase.js"

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overLay = document.getElementById('overlay-menu')
let btnFechar = document.getElementById('btn-fechar')


btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overLay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})





const form = document.querySelector('form');
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const dados = { nome, email, mensagem };

    try {
        const resposta = await fetch('https://servidor-firebase-8gdlaw6dn-marcos-projects-c2476069.vercel.app/api/enviar-dados', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();
        console.log(resultado);

        if (resposta.ok) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        } else {
            alert('Erro ao enviar mensagem: ' + resultado.erro);
        }

    } catch (erro) {
        console.error('Erro na requisição:', erro);
        alert('Erro ao conectar com o servidor.');
    }
});
