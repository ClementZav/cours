@extends('layouts.app')

@section('content')
    <form method="post" action="index.php?action=creation">
        <input name="user" type="text"><br>
        <input name="pwd" type="password">
        <input type="submit" name="valider">


    </form>
@endsection
