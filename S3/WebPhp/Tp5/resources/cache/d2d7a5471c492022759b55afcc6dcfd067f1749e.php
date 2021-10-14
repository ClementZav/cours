<?php $__env->startSection('content'); ?>
    <form method="post" action="index.php?action=connexion">
        <input name="user" type="text"><br>
        <input name="pwd" type="password">
        <input type="submit" name="valider">


    </form>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>