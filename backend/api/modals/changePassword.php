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
        $userHelper = new usersHelper($db);
        $username = $_POST["username"];
        $currentPassword = $_POST["currentPassword"];
        $newPassword = $_POST['newPassword'];
        $confirmNewPassword = $_POST['confirmNewPassword'];
        $returnMessage = $userHelper->checkPassword($username, $currentPassword);
        if ($returnMessage == false){
            $data = array();
            $data['message'] = "Incorrect Password!";
            echo json_encode($data);
            $db->close();       
        }
        else if ($newPassword != $confirmNewPassword){
            $data = array();
            $data['message'] = "Passwords do not match!";
            echo json_encode($data);      
            $db->close();       
        }
        else if ($newPassword == $currentPassword){
            $data = array();
            $data['message'] = "Passwords must be different!";
            echo json_encode($data);  
            $db->close();  
        }
        else{
        $userHelper->updatePassword($username, $newPassword);
        $returnMessage = "success";
        $data = array();
        $data['message'] = $returnMessage;
        echo json_encode($data);
        $db->close();
        }
    }
?>