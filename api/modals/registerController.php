<?php
    include_once("dbConnect.php");
    include_once("config.php");
    include_once("index.php");
    include_once("dbqueries.php");

    class registerController {

        private $db;
        private $requestMethod;
        private $username;

        public function __construct($db, $requestMethod, $username)
        {              
            $db = new usersHelper();
            $this->db = $db;
            $this->requestMethod = $requestMethod;
            $this->username = $username;

        }

        public function processRequest()
        {
            switch ($this->requestMethod){
                case 'GET':
                    if ($this->username) {
                        $response = $this->getUser($this->username);
                    } else {
                        $response = $this->getAllUsers();
                    };
                    break;
                case 'POST':
                    $response = $this->createUserFromRequest();
                    break;
                default:
                    $response = $this->notFoundResponse();
                    break;
            }
            header($response['status_code_header']);
            if ($response['body']) {
                echo $response['body'];
            }
        }
    
        private function getAllUsers()
        {
            $db = new usersHelper();
            $result = $db->getAllUsers();
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }
    
        private function getUser($username)
        {
            $db = new usersHelper();
            $result = $db->getUserByID($id);
            if (! $result) {
                return $db->notFoundResponse();
            }
            $response['status_code_header'] = 'HTTP/1.1 200 OK';
            $response['body'] = json_encode($result);
            return $response;
        }
    
        private function createUserFromRequest()
        {
            $db = new usersHelper();
            $input = (array) json_decode(file_get_contents('php://input'), TRUE);
            $db->addUser($input[0], $input[1]);
            $response['status_code_header'] = 'HTTP/1.1 200 Created';
            $response['body'] = null;
            return $response;
        }
    
        private function notFoundResponse()
        {
            $response['status_code_header'] = 'HTTP/1.1 404 Not Found';
            $response['body'] = null;
            return $response;
        }
    }
?>