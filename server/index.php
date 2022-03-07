<?php
include_once("config.php");
include_once("dbConnect.php");

$db = (new DbConnection($db_config))->getConnection();
?>