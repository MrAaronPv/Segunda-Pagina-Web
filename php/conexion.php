<?php
    $host = "127.0.0.1";
    $user = "root";
    $password = "";
    $database = "coffe_time";

    $db_conection = new mysqli($host, $user, $password, $database); 

    if ($db_conection -> connect_error) {
        die("Error de conexión: " . $db_conection -> connect_error);
    }
?>