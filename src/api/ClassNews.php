<?php
    include ("ClassConnect.php");
    class ClassNews extends ClassConnect{
        public function newsListAll($page, $section){
            $querry = "SELECT * FROM News";
            if ($section!="all") $querry .=  " WHERE Section='$section'";
            $querry .= " ORDER BY Date DESC";
            $querry .= " LIMIT $page";
            $Bfetch = $this->loginDB() -> prepare($querry);
            $Bfetch -> execute();
            //$J = [];
            //$I = 0;
            //while($Fetch = $Bfetch -> fetch(PDO::FETCH_ASSOC)){
            //    $J[$I] = [
            //        "ID" => $Fetch['ID'],
            //        "Title" => $Fetch['Title'],
            //        "News" => $Fetch['News'],
            //        "UserID" => $Fetch['UserID'],
            //        "Date" => $Fetch['Date'],
            //        "Section" => $Fetch['Section'],
            //        "Banner" => $Fetch['Banner']
            //    ];
            //    $I++;
            //}
            $Fetch = $Bfetch -> fetchAll(PDO::FETCH_ASSOC);
            header("Access-Control-Allow-Origin: *");
            header("Content-type: application/json");
            echo json_encode($Fetch);
        }
    }
?>