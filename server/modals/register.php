<?php

    include("dbConnect.php");

    $username = "rsjeon";
    $password = "password1";

    if ($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM users(username, hashed_pw)";

    $result = mysql_query($sql);
    if ($result) {
        if (mysql_num_rows($result) > 0) {
            echo 'User already exists!';
        } else {
            dbConnect.addUser($username, $password);
            echo 'Added a user';
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