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
        $token = $_POST['token'];
        $password = $_POST['newPassword'];
        $confirmPassword = $_POST['confirmNewPassword'];
        $response = $passwordHelper->changePassword($token, $password, $confirmPassword);
        $data = array();
        if ($response == "The passwords given did not match!"){
            $data['message'] = $response;
            echo json_encode($data);
            $db->close();
        }
        else if ($response == "This token is invalid!"){
            $data['message'] = $response;
            echo json_encode($data);
            $db->close();
        }
        else{
        $data['message'] = $response;
        echo json_encode($data);
        $db->close();
        }
    }
?>