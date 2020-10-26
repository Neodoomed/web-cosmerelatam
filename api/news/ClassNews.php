<?php
    include ("ClassConnect.php");
    class ClassNews extends ClassConnect{
        public function newsListAll($page, $section){
            $querry = "SELECT * FROM News";
            if ($section!="all") $querry .=  " WHERE Section=:section";
            $querry .= " ORDER BY Date DESC";
            $querry .= " LIMIT 5";
            $Bfetch = $this->loginDB() -> prepare($querry);
            $Bfetch -> execute(['section' => $section,'page' => (int)$page]);
            $Fetch = $Bfetch -> fetchAll(PDO::FETCH_ASSOC);
            header("Access-Control-Allow-Origin: *");
            header("Content-type: application/json");
            echo json_encode($Fetch);
        }
        public function newDisplay($id){
            $newId = (int)$id;
            $querry = "SELECT * FROM News WHERE ID= :id";
            $Bfetch = $this->loginDB() -> prepare($querry);
            $Bfetch -> execute(['id' => (int)$id]);
            $Fetch = $Bfetch -> fetchAll(PDO::FETCH_ASSOC);
            header("Access-Control-Allow-Origin: *");
            header("Content-type: application/json");
            echo json_encode($Fetch);
        }
    }
?>