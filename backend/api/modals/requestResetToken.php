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
        $passwordHelper = new passwordResetHelper($db);
        $email = $_POST['email'];
        $resetToken = $passwordHelper->generateResetToken($email);
        if ($resetToken == "This email does not exist!"){
            http_response_code(404);
        }
        else{
        $data = array();
        $data['resetToken'] = $resetToken;
        echo json_encode($data);
        $db->close();
        }
    }
?>