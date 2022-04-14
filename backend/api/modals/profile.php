<?php
    include("./helper.php");
    include_once("config.php");
    include_once("dbConnect.php");
    include_once("dbqueries.php");
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    header("Access-Control-Allow-Headers: *");
    $_POST = json_decode(file_get_contents("php://input"));
    $method = $SERVER['REQUEST_METHOD'];

    if (empty($_POST['username']) || empty($_POST['password'])){
        die();
    }
    if($method == 'POST'){
        $db = new DBConnection($db_config);
        $db = $db -> getConnection();
        $token = generateAuth();

        // data to send to the API
        $data = [
            "wins" => $_POST['Wins'],
            "losses" => $_POST['Losses'],
            "username" => $_POST['username']
        ];
        $username = $_POST['username'];
        $wins = $_POST['Wins'];
        // json_encode - Returns the JSON representation of a value
        json_encode($username.updateWins($wins));
    }
    
    $db->close();
?>