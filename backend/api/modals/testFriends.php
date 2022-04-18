<?php
require("../config.php");
require("../dbConnect.php");
require("../dbqueries.php");
$db = new DBConnection($db_config);
$db = $db -> getConnection();
$friendsDataBase = new usersHelper($db);
$friendsDataBase->addUser('test', 'test@buffalo.edu','testing123');
?>