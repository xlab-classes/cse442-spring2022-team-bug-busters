<?php

    include_once("dbConnect.php");
    include_once("config.php");
    include_once("index.php");

    //... Assuming usersHelper creates connection by constructor
    $db = new DBConnection($db_config);
    $db = $db->getConnection();
    $userDataBase = new usersHelper($db);

    if ($_SERVER['REQUEST_METHOD'] == 'POST'){

        if (!isset($_POST['firstname'], $_POST['lastname'], $_POST['username'], $_POST['password'])) {
            exit('Missing field(s)!');
        }

        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $username = $_POST['username'];
        $password = $_POST['password'];

        if ($stmt = $userDataBase->prepare("SELECT username FROM users WHERE userid = ?")){
            $stmt->bind_param('s', $_POST['username']);
            $stmt->execute();
            $stmt->store_result();

            if (mysql_num_rows($stmt)>0){
                echo 'Username already exits. Please try again.';
            }
            else{
                //FIX: addUser should also have lastname and email as parameters
                //... after fixed, pass those parameters into addUser()
                if ($stmt = $userDataBase->addUser($username, $password)){
                    // Save hashed password
                    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
                    $stmt->bind_param('ss', $_POST['username'], $password);
                    $stmt->execute();
                    echo 'Registered successfully';
                }
                else{
                    echo 'There is an error!';
                }
            }
        }
        else {
            echo 'There is an error!';
        }

    //     //TODO: dbqueries.php - Must include 'First name', 'Last name' to addUser() method
    //     $sql = "SELECT * FROM users($username, $hashed_pw)";
        
    //     $result = mysql_query($sql);
    //     if ($result) {
    //         if (mysql_num_rows($result) > 0) {
    //             echo 'User already exists!';
    //         } else {
    //             $userDataBase->addUser('$firstname', '$lastname', '$username', '$password');
    //             echo 'Added a user!';
    //         }
    //     } else {
    //         echo "Error: " . $sql . "<br>" . $conn->error;
    //     }

    //     if ($conn->query($sql) === TRUE) {
    //         echo "New record created successfully";
    //     } else {
    //         echo "Error: " . $sql . "<br>" . $conn->error;
    //     }

    //     $conn->close();
    // }
    }
    $userDataBase->close();

?>