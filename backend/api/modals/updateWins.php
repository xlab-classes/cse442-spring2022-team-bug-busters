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
        $passwordHelper = new scoresHelper($db);
        $username = $_POST['username'];
        $wins = $_POST['wins'];
        $resetToken = $passwordHelper->updateWins($username, $wins);
        $data = array();
        $data['Message'] = "Wins successfully added!";
        echo json_encode($data);
        $db->close();
    }
?>