<?php 
    include("ClassNews.php");
    $fuc='';
    if (isset($_GET['f'])) $fuc = $_GET['f'];
    switch ($fuc){
        case 'newsListAll':
            $section = (isset($_GET['sec'])) ? $_GET['sec'] : 'all';
            $page = (isset($_GET['page'])) ? $_GET['page'] : '5';
            $News = new ClassNews();
            $News->newsListAll($page, $section);
        break;
        default:
            Echo "Function ".$fuc." don't found.";
    }
?>