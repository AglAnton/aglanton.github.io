<?php

$server = 'h907188693.mysql';
$username = 'h907188693_mysql';
$password = 'QU+KsKW1';
$name = 'h907188693_db';

$connection = mysqli_connect(
  $server,
  $username,
  $password,
  $name
);
$connection->set_charset("utf8");

if ( !$connection ) {
  echo 'Не удалось подключиться к базе данных!<br>';
  echo mysqli_connect_error();
  exit();
}