<?php

setcookie("test",0,time() + 60);

echo htmlentities($_COOKIE["test"]);

?>
