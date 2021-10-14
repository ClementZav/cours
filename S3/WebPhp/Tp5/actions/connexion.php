<?php

$sql = "SELECT * FROM user WHERE login=? AND mdp=PASSWORD(?)"; //PASSWORD a remplacer par sha1(?) sur les dernières versions de sql

if (!empty($_POST['user'] AND !empty($_POST['pwd']))){
    $login = $_POST['user'];
    $pwd = $_POST['pwd'];
    // Etape 1  : preparation
    $query = $pdo->prepare($sql);
    $query->execute(array($login,$pwd));
    if($line = $query->fetch()){
            $_SESSION['login'] = $line['login'];
            $_SESSION['id'] = $line['id'];
            echo $blade->make('index')->render();

    } else {
        echo $blade->make('login')->render();
    }
}



// Etape 2 : execution : 2 paramètres dans la requêtes !!






// Etape 3 : ici le login est unique, donc on sait que l'on peut avoir zero ou une  seule ligne.

// un seul fetch

// Si $line est faux le couple login mdp est mauvais, on retourne au formulaire

// sinon on crée les variables de session $_SESSION['id'] et $_SESSION['login'] et on va à la page d'accueil