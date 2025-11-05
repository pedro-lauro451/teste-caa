<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $companyName = $_POST['companyName'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];
    $assunto = "AlphaSquad - Contato";

    $headers = "From: $email";
    $headers .= "\r\nMIME-Version: 1.0";
    $headers .= "\r\nContent-Type: multipart/mixed; boundary=\"boundary\"\r\n";

    $body = "--boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Disposition: inline\r\n";
    $body .= "Content-Transfer-Encoding: 8bit\r\n\r\n";
    $body .= "Nome: $firstName\r\n";
    $body .= "Sobrenome: $lastName\r\n";
    $body .= "E-mail: $email\r\n";
    $body .= "Nome da empresa: $companyName\r\n";
    $body .= "Assunto: $subject\r\n\r\n";
    $body .= "Mensagem: $message\r\n\r\n";

    if (mail("contato@grupocaa.com.br", $assunto, $body, $headers)) {
        header("Location: contato.html?status=success");
        exit();
    } else {
        header("Location: contato.html?status=error");
        exit();
    }
}
?>