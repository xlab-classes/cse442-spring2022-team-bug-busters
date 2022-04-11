<?php
    include_once("config.php");
    include_once("dbConnect.php");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $_POST = json_decode(file_get_contents("php://input"));
    $method = $_SERVER['REQUEST_METHOD'];
    
    if (empty($_POST['username']) && empty($_POST['password'])){
        die();
    }
    if($method == 'POST'){
        $db = new DBConnection($db_config);
        $db = $db -> getConnection();

        http_response_code(200);
        $token = generateAuth();

        $data = [
            "username" => $_POST['username'],
            "password" => $_POST['password'],
            "msg" =>"success",
            "token" => $token
        ];
        
        echo json_encode($data);
    }
    
    $db->close();
    
    function generateAuth(){
        $token = bin2hex(openssl_random_pseudo_bytes(60));
        return $token;
    }
?>