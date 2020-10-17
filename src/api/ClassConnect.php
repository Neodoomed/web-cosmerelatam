<?php
#Conneccion a la Bace de Datos
class ClassConnect{
    protected function loginDB(){

        $HostDB = 'https://databases.000webhost.com';
        $NameDB = 'id14864553_cosmerelatam';
        $UserDB = 'id14864553_hoid';
        $PassDB = 'Co8zFK=C>cPYx({G';

        try{
            $Con = new PDO('mysql:host='.$HostDB.';dbname='.$NameDB, $UserDB, $PassDB);
            retur $Con;
        }catch (PDOExceptio $Erro){
            return $Erro->getMessage();
        }
    }
}

?>