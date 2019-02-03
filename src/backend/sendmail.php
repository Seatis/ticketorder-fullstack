<?php
require ('PHPMailer.php');

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->isSendmail();                                      // Mail küldés Sendmail használatával
$mail->SMTPAuth = true;                                   // SMTP autentikáció
$mail->Username = 'info@eloadasgyomro.hu';              // SMTP felhasználónév
$mail->Password = 'Eloadas#Gyomro99';                             // SMTP jelszó
$mail->setFrom('info@eloadasgyomro.hu', 'EloadasGyomro');   // Küldő cím
$mail->addAddress('atikezer@gmail.com', 'User');            // Címzett
$mail->Subject = 'PHPMailer teszt';                       // A levél tárgya
$mail->Body    = 'Teszt';                                 // A levél törzse
echo 'wsa';
if(!$mail->send()) {
  echo 'A levél nem küldhető el.';
  echo 'PHPMailer hiba: ' . $mail->ErrorInfo;
} else {
  echo 'A levél elküldve.';
}
?>
