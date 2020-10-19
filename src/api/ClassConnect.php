<?php
#Conneccion a la Bace de Datos
    class ClassConnect{
        protected function loginDB(){

            $HostDB = 'localhost';
            $NameDB = 'id14864553_cosmerelatam';
            $UserDB = 'id14864553_hoid';
            $PassDB = 'jDdF*kmb5~KiKXpR';

            try{
                $Con = new PDO("mysql:host=$HostDB;dbname=$NameDB", $UserDB, $PassDB, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
                $Con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $Con;
            }catch (PDOExceptio $Erro){
                return $Erro->getMessage();
            }
        }
    }

?>