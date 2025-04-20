document.getElementById('form-contato').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };

    try {
        const response = await fetch('https://portfoliomarcosleandro.vercel.app/api/sendEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('form-contato').reset();
        } else {
            alert('Erro: ' + (result.error || 'Tente novamente.'));
        }
    } catch (error) {
        alert('Falha na conexão. Verifique sua internet.');
    }
});