<?php

/* --------- File Handling ---------- */

/* 
    File handling is the ability to read and write files on the server.
    PHP has built in functions for reading and writing files.
*/

$file = 'extras/users.txt';

if(file_exists($file)) {
    // echo readFile($file);
    $handle = fopen($file, 'r');
    $contents = fread($handle, filesize($file));
    fclose($handle);
    echo $contents;
} else {
    $handle = fopen($file, 'w');
    $contents = 'Saqlain' . PHP_EOL .  'Adil' . PHP_EOL . 'Sanaullah';
    fwrite($handle, $contents);
    fclose($handle);
}