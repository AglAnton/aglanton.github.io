<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Спасибо за заказ!</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 0 50px;
    }
    h1 {
      color: #25527D;
      font-size: 50px;
    }
    p {
      font-size: 1.3rem;
      padding-bottom: 3rem;
    }
    .button {
      background-color: #25527D;
      padding: 10px 20px;
      border-radius: 15px;
      color: #fff;
      font-size: 25px;
      transition: .3s;
      text-transform: capitalize;
      text-decoration: none;
    }
    .button:hover {
      background-color: rgb(32, 72, 109);
      text-decoration: none;
      color: #fff;
    }
    .repeat {
      font-size: 20px;
      padding: 5px 15px;
    }
  </style>
</head>
<body>

<?php
  
  $name = $_POST['name'];
  $number = $_POST['number'];
  $email = $_POST['email'] ? $_POST['email'] : ' -';
  $vincode = $_POST['vincode'] ? $_POST['email'] : ' -';
    
  $pack1 = $_POST['pack1'];
  $pack2 = $_POST['pack2'];
  $pack3 = $_POST['pack3'];
  $pack = ($pack1 || $pack2 || $pack3) ? ($pack1 . ' ' . $pack2 . ' ' . $pack3) : ' -';
  
  $comment = $_POST['comment'];

  // compilation letter
  if ( !empty($name) && !empty(number) ) {
    $to = "servicepolo@ya.ru";
    $subject = "Service polo";

    $message = 
      "<style>
        ul {
          list-style:none;
          margin: 0;
          padding: 0;
        }
        li {
          padding: 4px 0;
        }
      </style>" .
      "<h1>Заявка обслужиполо.рф</h1>" .
      "<ul>" .
      "<li><b>Имя:</b> $name</li>" .
      "<li><b>Номер:</b> $number</li>" .
      "<li><b>E-mail:</b> $email</li>" .
      "<li><b>Vin код:</b> $vincode</li><br>" .
      "<li><b>Пакеты:</b> $pack</li><br>";

    if (!empty($comment)) {
      $comment = nl2br($comment);
      $message .= "<li><b>Комментарий:</b></li> $comment";
    }

    $message .= "</ul>";

    $headers  = "Content-type: text/html; charset=UTF-8 \r\n";

    // send letter
    if ( mail ($to, $subject, $message, $headers) ) {
        echo '<h1>Спасибо за заявку!</h1>' .
            '<p>Мы Вам перезвоним</p>'; 
    } else {
      echo '<h1>Упс, что-то пошло не так!</h1>' .
      '<p>Повторите попытку или позвоните нам: <a href="tel:+79891250220">+7 (989) 125-02-20</a></p>'; 
    }
  } else {
    echo '<h1>Упс, что-то пошло не так!</h1>' .
    '<p>Повторите попытку или позвоните нам: <a href="tel:+79891250220">+7 (989) 125-02-20</a></p>'; 
  }
?>

<a href="../" class='button'>Вернуться</a>

</body>
</html>