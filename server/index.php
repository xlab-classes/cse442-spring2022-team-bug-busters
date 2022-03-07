<?php

    include_once("config.php");
    include_once("dbConnect.php");

    $db = (new DbConnection($db_config))->getConnection();

    echo "</br></br><h1>Current Path</h1>";

    $request = explode('?', $_SERVER['REQUEST_URI'], 2);

    switch ($request[0]) {
        case '/' :
            require __DIR__ . '/public/home.php';
            break;
        case '/login' :
            require __DIR__ . '/public/login.php';
            break;
        case '/register' :
            require __DIR__ . '/public/register.php';
            break;
        case '/createroom' :
            require __DIR__ . '/public/createroom.php';
            break;
        case '/gameroom' :
            require __DIR__ . '/public/gameroom.php';
            break;
        case '/joinroom' :
            require __DIR__ . '/public/joinroom.php';
            break;
        case '/settings' :
            require __DIR__ . '/public/settings.php';
            break;
        default:
            http_response_code(404);
            require __DIR__ . '/public/error404.php';
            break;
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
