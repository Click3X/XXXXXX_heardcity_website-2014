<?php
// include('php/config.php');
// include('php/functions.php'); 
include('php/config.php');
include('php/newnames.php'); 
$file ='php/functions.php';

$read = is_readable($file);
echo 'This is read: '.$read.', and this is file: '.$file;

  // header( 'Location: home.php' ) ;
echo 'This is php and you are a BITCH BOY MAHN!';
echo 'Current PHP version '.phpversion();

echo 'These are the new names: '.print_r($newnames);

// include('php/footer.php');

?>