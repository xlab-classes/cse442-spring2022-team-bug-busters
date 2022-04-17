<?php
$db = new DBConnection($db_config);
$db = $db -> getConnection();
$friendsDataBase = new friendsHelper($db);
echo(serialize($friendsDataBase->removeFriend('kelly', 'hello')));
?>