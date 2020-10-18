<?php
    include ("ClassConnect.php");
    class ClassNews extends ClassConnect{
        public function newsListAll(){
            $Bfetch = $this->loginDB() -> prepare('SELECT * FROM News ORDER BY Date DESC');
            $Bfetch -> execute();
            $J = [];
            $I = 0;
            while($Fetch = $Bfetch -> fetch(PDO::FETCH_ASSOC)){
                $J[$I] = [
                    "ID" => $Fetch['ID'],
                    "News" => $Fetch['News'],
                    "UserID" => $Fetch['UserID'],
                    "Date" => $Fetch['Date'],
                    "Section" => $Fetch['Section'],
                    "Banner" => $Fetch['Banner']
                ];
                $I++;
            }
            header("Access-Control-Allow-Origin: *");
            header("Content-type: application/json");
            echo json_encode($J);
        }
    }
?>