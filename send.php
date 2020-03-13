<?php
// Llamando a enviar
$correo = $_POST['correo'];

// Cuerpo del mensaje
$destinatario = "anth.trillo@gamil.com";
$asunto = "Mensaje desde portafolio";

$mensaje = "Correo: $correo";

// Enviando mensaje
mail($destinatario, $asunto, $mensaje);
header('Location:cartel-de-envio.html')

?>