<?php

	if ('POST' === $_SERVER['REQUEST_METHOD'])   {
		if(empty($_POST['name']) || empty($_POST['email']) || strpos($_POST['email'], "@") == false || empty($_POST['mensaje'])) {
			if(empty($_POST['name'])){
				echo "<div class='error'>El campo nombre esta vacio</div>";
			}
            if(empty($_POST['email'])){
				echo "<div class='error'>El campo correo esta vacio</div>";
			}else if(strpos($_POST['email'], "@") == false ){
                echo "<div class='error'>No es un correo valido</div>";
            }
			if(empty($_POST['mensaje'])){
				echo "<div class='error'>El campo mensaje vacio</div>";
			}

		} else {

            $nombre = $_POST['name'];
            $mail = $_POST['email'];
            $empresa = $_POST['mensaje'];

            $header = 'From: ' . $mail . " \r\n";
            $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
            $header .= "Mime-Version: 1.0 \r\n";
            $header .= "Content-Type: text/plain";

            $mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
            $mensaje .= "Su e-mail es: " . $mail . " \r\n";
            $mensaje .= "Mensaje: " . $_POST['mensaje'] . " \r\n";
            $mensaje .= "Enviado el " . date('d/m/Y', time());

            $para = 'marco.choque198@gmail.com';
            $asunto = 'Mensaje de mi sitio web';

            $mailsent = mail($para, $asunto, utf8_decode($mensaje), $header);

			if($mailsent) {
				echo "<div class='correcto'>Mensaje enviado correctamente</div>";
			}
		}
	}
?>
