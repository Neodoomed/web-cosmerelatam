<?php 
    include("ClassNews.php");
    $f='';
    if (isset($_GET['f'])) $f = $_GET['f'];
    switch ($f){
        case 'newsListAll':
            $News = new ClassNews();
            $News->newsListAll();
        break;
        default:
            Echo "Function ".$f." don't found.";
    }
?>