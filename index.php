<?php
    $dbServername = "oceanus.cse.buffalo.edu";
    $dbUsername = "jiaqifen";
    $dbPassword = "50235120";
    $dbName = "cse442_2022_spring_team_h_db";

    // Create connection to our DB
    $conn = new mysqli($dbServername, $dbUsername, $dbPassword, $dbName);
    echo "Attempting to connect to ". $dbServername . "<br>";

    // Check Connection
    if(!$conn){
        echo "Connection to DB failed: ". mysqli_connect_error();
        exit();
    }
    echo "Connection to DB success<br>";

    // how to create table
    $create_test_table = "CREATE TABLE IF NOT EXISTS `test`
    ( 
        `userid` INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(16) NOT NULL,
        score INT DEFAULT 0 NOT NULL,
        PRIMARY KEY(userid)
    );";

    if(mysqli_query($conn, $create_test_table)){
        echo "Table test created successfully";
    }else{
        echo "Error creating table: " . $conn->error;
    }
?>

<html lang="en">
    <head>
        <title>Bug Busters</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/app/assets/css/app.css" type="text/css">
    </head>
    <body>

        <div id="app"></div>

        <script type="text/javascript" src="/app/assets/bundle/main.bundle.js" ></script>

    </body>
</html>
