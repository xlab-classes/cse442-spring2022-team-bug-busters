<?php
    include_once("config.php");
    include_once("dbConnect.php");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , X-Requested-With, Authorization');
    header('Content-Type: application/json; charset=utf-8');
    $_POST = json_decode(file_get_contents("php://input"));
    
    $db = new DBConnection($db_config);
    $db = $db -> getConnection();

    http_response_code(200);
    $token = generateAuth();

    $data = [
        "msg" =>"success",
        "token" => $token
    ];
    $db->close();
    return json_encode($data);

    function generateAuth(){
        $token = bin2hex(openssl_random_pseudo_bytes(60));
        return $token;
    }
?>