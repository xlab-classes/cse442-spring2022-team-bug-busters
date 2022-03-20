<?php
    include_once("index.php");

    function generateAuth(){
        $token = bin2hex(openssl_random_pseudo_bytes(60));
        return $token;
    }
?>