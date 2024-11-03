<?php 
 session_start();

 session_destroy();
 header('Location: /php-crash/13_sessions.php');