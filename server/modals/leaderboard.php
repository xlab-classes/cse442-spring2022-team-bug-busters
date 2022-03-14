<?php
echo "Leaderboard!";
$db = new DBConnection($db_config);
$db = $db -> getConnection();
$userWins = $scoresDataBase->getAllWins();
$userLoses = $scoresDataBase->getAllLoses();
$userPoints = $scoresDataBase->getAllPoints();
$counter = 1;

echo "<html>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>

<table style='width:100%'>
<tr>
<th>Username</th>
<th>Wins</th>
</tr>"
;
$counter = 1;
foreach ($userWins as $value){
    echo "<tr><th>".$counter.". ".$value["username"]."</th><th>".$value["wins"]."</th></tr>";
    $counter = $counter + 1;
} 
echo "</table><br><br>

<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>

<table style='width:100%'>
<tr>
<th>Username</th>
<th>Loses</th>
</tr>"
;
$counter = 1;
foreach ($userLoses as $value){
    echo "<tr><th>".$counter.". ".$value["username"]."</th><th>".$value["loses"]."</th></tr>";
    $counter = $counter + 1;
} 
echo "</table><br><br>
<style>
table, th, td {
  border:1px solid black;
}
</style>
<body>

<table style='width:100%'>
<tr>
<th>Username</th>
<th>Points</th>
</tr>"
;
$counter = 1;
foreach ($userPoints as $value){
    echo "<tr><th>".$counter.". ".$value["username"]."</th><th>".$value["points"]."</th></tr>";
    $counter = $counter + 1;
} 
echo "</table>

</body>



</html>";

?>