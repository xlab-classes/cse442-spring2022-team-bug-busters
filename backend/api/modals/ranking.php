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

    if($method == 'GET'){
        $db = new DBConnection($db_config);
        $db = $db -> getConnection();
        $scoresDataBase = new scoresHelper($db);
        $allPoints = $scoresDataBase->getAllPoints();
        // $allPoints['message'] = "Sending a list of users in the order from most points to least points";         
        echo json_encode($allPoints);
        $db->close();
    }
?>