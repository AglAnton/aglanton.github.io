<?php

$server = 'localhost';
$username = 'root';
$password = 'root';
$name = 'prices';

$connection = mysqli_connect(
  $server,
  $username,
  $password,
  $name
);

if ( !$connection ) {
  echo 'Не удалось подключиться к базе данных!<br>';
  echo mysqli_connect_error();
  exit();
}