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
        $scoresDataBase = new scoresHelper($db);
        $token = generateAuth();

        $data = [
            "username" => $_POST['username'],
            "wins" => $_POST['Wins'],
            "losses" => $_POST['Losses'],
            "points" => $_POST['Points'],
            "msg" =>"success",
            "token" => $token
        ];
        $username = $_POST['username'];
        $scoresDataBase->getUserStats($username);
        
        echo "Your total points are updated to ". $_POST['Points']. ", ". $_POST["username"]. "!";
        echo json_encode($data);
    }
    
    // $db->close();
    $scoresDataBase->close();
?>