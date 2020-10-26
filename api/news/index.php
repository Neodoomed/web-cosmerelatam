<?php 
    include("ClassNews.php");
    $fuc='';
    if (isset($_GET['f'])) $fuc = $_GET['f'];
    $News = new ClassNews();
    switch ($fuc){
        case 'newsListAll':
            $section = (isset($_GET['sec'])) ? $_GET['sec'] : 'all';
            $page = (isset($_GET['page'])) ? $_GET['page'] : '5';
            $News->newsListAll($page, $section);
            break;
        case 'newDisplay':
            $id = isset($_GET['id']);
            $News->newDisplay($id);
            break;
        default:
            Echo "Function ".$fuc." don't found.";
    }
?>