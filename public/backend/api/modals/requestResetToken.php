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
            $data['message'] = "This email does not exist!";
            echo json_encode($data);
        }
        else{
        $data = array();

        $resetLink = $_POST['url']."/".$resetToken;

        $to = $email;
        $subject = "Bug Busters Password Reset Link";
         
        $message = "

        <h1>Password Reset Link</h1>
        <b>Please click the following link to be redirected to the password reset page,
        there will be additional instructions to follow on that page!</b><br/>
        <a href =\"".$resetLink."\">Password Reset Link</a>
        
        ";
         
        $header = "From:no-reply@email.bugbusters.com \r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-type: text/html\r\n";
         
        $retval = mail ($to,$subject,$message,$header);
         
        if( $retval == true ) {
            $data['message'] = "Token has been sent successfully!";
        }else {
            http_response_code(500);
        }
        echo json_encode($data);
        $db->close();
        }
    }
?>