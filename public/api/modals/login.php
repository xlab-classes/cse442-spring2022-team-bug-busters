<?php
    include_once("config.php");
    include_once("dbConnect.php");
    function auth(){
        header("HTTP/1.1 200 OK");
        header('Access-Control-Allow-Origin: *');
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
        header("Content-Type: application/json; charset=utf-8");
        $_POST = json_decode(file_get_contents("php://input"));
        
        if (empty($_POST['username']) && empty($_POST['password'])){
            die();
        }
        if($_POST){
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
            $db->close();
            return json_encode($data);
        }
    }
    

    function generateAuth(){
        $token = bin2hex(openssl_random_pseudo_bytes(60));
        return $token;
    }
?>