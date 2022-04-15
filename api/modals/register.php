<?php
    include("./helper.php");
    include_once("./config.php");
    include_once("./dbqueries.php");
    include_once("./dbConnect.php");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: *");
    $_POST = json_decode(file_get_contents("php://input"), true);
    $method = $_SERVER['REQUEST_METHOD'];
    
    if ($method == 'POST'){
        if (empty($_POST['username']) || empty($_POST['password'])){
            die();
        }

        $db = new DBConnection($db_config);
        $db = $db -> getConnection();
        $userDataBase = new usersHelper($db);
        $token = generateAuth();

        $data = [
            "firstname" => $_POST['firstname'],
            "lastname" => $_POST['lastname'],
            "username" => $_POST['username'],
            "password" => $_POST['password'],
            "msg" =>"success",
            "token" => $token
        ];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $userDataBase->addUser($username, $password);
        
        echo "You are registered, ". $_POST['name']. "!";
        echo json_encode($data);
    }
    
    // $db->close();
    $userDataBase->close();
?>