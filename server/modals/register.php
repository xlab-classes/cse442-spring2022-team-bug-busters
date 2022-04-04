<?php

    include_once("dbConnect.php");
    include_once("config.php");
    include_once("index.php");

    // ALTERNATIVE
    // $this->conn = new mysqli(
    //     $servername = $db_config["dbServername"],
    //     $username = $db_config["dbUsername"],
    //     $password = $db_config["dbPassword"],
    // );

    // Lines 15 - 24: [ALTERNATIVE] Creates new connection and access 
    // $this->conn = mysqli_connect(
    //     $servername,
    //     $username,
    //     $password,
    // );

    // // Will automatically render __construct (ie. pass or fail)
    // $db = new DBConnection($db_config);
    // // Verifies and returns valid connection
    // $db = $db -> getConnection();

    //... Assuming usersHelper creates connection created from other php files
    $userDataBase = new usersHelper($db);

    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    //TODO: dbqueries.php - Must include 'First name', 'Last name' to addUser() method
    $sql = "SELECT * FROM users($username, $hashed_pw)";
    
    $result = mysql_query($sql);
    if ($result) {
        if (mysql_num_rows($result) > 0) {
            echo 'User already exists!';
        } else {
            $userDataBase->addUser('$firstname', '$lastname', '$username', '$password');
            echo 'Added a user!';
        }
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

?>