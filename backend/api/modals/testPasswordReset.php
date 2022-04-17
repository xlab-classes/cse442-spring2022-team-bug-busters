<?php
$db = new DBConnection($db_config);
$db = $db -> getConnection();
$passwordResetDatabase = new passwordResetHelper($db);
$userDataBase = new usersHelper($db);
?>