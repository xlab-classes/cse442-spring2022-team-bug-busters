<?php
    require("../helper.php");
    require("../config.php");
    require("../dbConnect.php");
    require("../dbqueries.php");

    http_response_code(200);
    header("Content-Type: application/json");
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    $method = $_SERVER['REQUEST_METHOD'];
    $_POST = json_decode(file_get_contents("php://input"), TRUE);
    if($method == 'POST'){
        $db = new DBConnection($db_config);
        $db = $db -> getConnection();
        $loginHelper = new usersHelper($db);
        $username = $_POST['username'];
        $password = $_POST['password'];
        $isLogin = $loginHelper->checkPassword($username, $password);
        if($isLogin){
            $token = generateAuth();
            $data = array();
            $data['token'] = $token;
            echo json_encode($data);
        }
        else{
            $data['token'] = "";
            http_response_code(401);
        }
        $db->close();
    }
?>