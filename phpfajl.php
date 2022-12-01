<?php

$dir_name = "silma/Kristali za text Silmarilion/";
$images = glob($dir_name."*.jpg");
foreach($images as $image) {

   echo '"'.$image.'", ';
}


?>