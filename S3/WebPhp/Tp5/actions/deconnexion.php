<?php
session_unset();
echo $blade->make('index')->render();
?>
