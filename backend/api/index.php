<?php
    include_once("config.php");
    include_once("dbConnect.php");
    include_once("dbqueries.php");

    $db = new DBConnection($db_config);
    $db = $db -> getConnection();
    $userDataBase = new usersHelper($db);
    $userDataBase->getAllUsers();
    $friendsDataBase = new friendsHelper($db);
    echo "</br></br><h1>Current Path</h1><br>";
    $request = explode('?', $_SERVER['REQUEST_URI'], 2);

    include_once("./modals/leaderboard.php");

    echo "</br></br><h1>Testing Friends</h1><br>";
    include_once("./modals/testFriends.php");
?>

<!doctype html>
<html lang="en">
    <head>
        <title>React PHP starter Kit</title>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>

        <div id="app"></div>

        <script type="text/javascript" src="/src/index.js" ></script>

    </body>
</html>