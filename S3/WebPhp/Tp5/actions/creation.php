<?php
$sql = "SELECT * FROM user WHERE login=?";

if(!empty($_POST['user'] || !empty($_POST['pwd']))){
    $login = $_POST['user'];
    $pwd = $_POST['pwd'];
    $query = $pdo->prepare($sql);
    $query->execute(array($login));
    if($line = $query->fetch()){
        echo $blade->make('inscription')->render();
    } else {
        $_SESSION['login'] = $login;
        $query2 = $pdo->prepare("INSERT INTO user(login, mdp) VALUE(?, PASSWORD(?))");
        $query2->execute(array($login, $pwd));
        $lastId= $pdo->lastInsertId();
        $_SESSION['id'] = $lastId;
        echo $blade->make('index')->render();
    }
} else {
    echo $blade->make('inscription')->render();
}
