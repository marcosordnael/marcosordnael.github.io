<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se todos os campos foram preenchidos
    if (isset($_POST["nome"]) && isset($_POST["email"]) && isset($_POST["telefone"]) && isset($_POST["mensagem"])) {
        // Recupera os dados do formulário
        $nome = $_POST["nome"];
        $email = $_POST["email"];
        $telefone = $_POST["telefone"];
        $mensagem = $_POST["mensagem"];
        
        // Monta o corpo do e-mail
        $corpo_email = "Nome: $nome\n";
        $corpo_email .= "Email: $email\n";
        $corpo_email .= "Telefone: $telefone\n";
        $corpo_email .= "Mensagem: $mensagem\n";
        
        // Envia o e-mail
        $destinatario = "marcosordnael@gmail.com";
        $assunto = "Novo formulário submetido";
        $headers = "De: $email";
        
        // Envia o e-mail usando a função mail()
        if (mail($destinatario, $assunto, $corpo_email, $headers)) {
            echo "success"; // Resposta para o JavaScript
        } else {
            echo "error"; // Resposta para o JavaScript
        }
    } else {
        echo "error"; // Resposta para o JavaScript se algum campo estiver vazio
    }
    exit;
}
?>
