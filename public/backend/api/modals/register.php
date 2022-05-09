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
        $userdb = new usersHelper($db);
        $username = $_POST['username'];
        $email = $_POST['email'];
        $password = $_POST['password'];

        $user = $userdb->addUser($username, $email, $password);
        if ($user === "This user already exists!"){
            $data = array();
            $data["message"] = "";
            http_response_code(200);
            echo json_encode($data);
        }
        else {
            $data = array();
            $data['message'] = "You are now registered from the backend!";
            echo json_encode($data);
        }        
        $db->close();
    }
?>