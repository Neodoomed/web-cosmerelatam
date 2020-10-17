<?php
include ("ClassConnect.php");

class ClassNews extends ClassConnect{

    public function newsListAll(){
        $Bfetch = $this->loginDB() -> prepare('select * form News');
        $Bfetch -> execute();

        $J = [];
        $I = 0;

        while($Fetch = $Bfetch -> fetch(PDO::FETCH_ASSOC)){
            $J[$I] = [
                "Id" => $Fetch['Id'],
                "Id" => $Fetch['Id'],
                "Id" => $Fetch['Id'],
                "Id" => $Fetch['Id']
            ]
        }
    }

?>