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
      color: #006d79;
      font-size: 50px;
    }
    h2, ul {
      text-align: left;
    }
    .button {
      background-color: #006d79;
      padding: 10px 20px;
      border-radius: 15px;
      text-transform: uppercase;
      color: #fff;
      font-size: 25px;
      transition: .3s;
      text-transform: capitalize;
      text-decoration: none;
    }
    .button:hover {
      background-color: #00545f;
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
  // get data
  $name = $_POST["name"];
  // $email = $_POST["email"];
  $number = $_POST["number"];
  $vincode = strtoupper( $_POST["vincode"] );
  $comment = $_POST["comment"];

  //spare parts
  $filter = $_POST["filter"];
  $filterMessage = '';
  if (!empty($filter)) {
    $filterMessage = "<li><b>Фильтра:</b></li>";
    for ($i = 0; $i < count($filter); $i++) {
      $filterMessage .= ($i+1 . " - " . $filter[$i] . "<br>");
    }
    $filterMessage .= "<br>";
  }

  $oil = $_POST["oil"];
  $oilMessage = '';
  if (!empty($oil)) {
    $oilMessage = "<li><b>Масла:</b></li>";
    for ($i = 0; $i < count($oil); $i++) {
      $oilMessage .= ($i+1 . " - " . $oil[$i] . "<br>");
    }
    $oilMessage .= "<br>";
  }

  $brake = $_POST["brake"];
  $brakeMessage = '';
  if (!empty($brake)) {
    $brakeMessage = "<li><b>Тормоза:</b></li>";
    for ($i = 0; $i < count($brake); $i++) {
      $brakeMessage .= ($i+1 . " - " . $brake[$i] . "<br>");
    }
    $brakeMessage .= "<br>";
  }
  
  $liquid = $_POST["liquid"];
  $liquidMessage = '';
  if (!empty($liquid)) {
    $liquidMessage = "<li><b>Жидкости:</b></li>";
    for ($i = 0; $i < count($liquid); $i++) {
      $liquidMessage .= ($i+1 . " - " . $liquid[$i] . "<br>");
    }
    $liquidMessage .= "<br>";
  }

  if (!empty($name) ||
      !empty($number) ||
      !empty($vincode) ) {
          
      // bd
      // Параметры для подключения
      $db_host = "h907188693.mysql"; 
      $db_user = "h907188693_mysql"; // Логин БД
      $db_password = "QU+KsKW1"; // Пароль БД
      $db_base = 'h907188693_db'; // Имя БД
      $db_table = "Users"; // Имя Таблицы БД
    
      // Подключение к базе данных
      $mysqli = new mysqli($db_host,$db_user,$db_password,$db_base);
    
      // Если есть ошибка соединения, выводим её и убиваем подключение
      if ($mysqli->connect_error) {
          die('Ошибка : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
      }
      
      $spareParts = '';
      if (!empty($filter)) {
        for ($i = 0; $i < count($filter); $i++) {
          $spareParts .= $filter[$i] . '\n';
        }
      }
      if (!empty($oil)) {
        for ($i = 0; $i < count($oil); $i++) {
          $spareParts .= $oil[$i] . '\n';
        }
      }
      if (!empty($brake)) {
        for ($i = 0; $i < count($brake); $i++) {
          $spareParts .= $brake[$i] . '\n';
        }
      }
      if (!empty($liquid)) {
        for ($i = 0; $i < count($liquid); $i++) {
          $spareParts .= $liquid[$i] . '\n';
        }
      }
      
      $result = $mysqli->query("INSERT INTO ".$db_table."
      (`name`, `number`, `vin code`, `comment`, `spare parts`) VALUES
      ('$name', '$number', '$vincode', '$comment', '$spareParts')");
    
      // compilation letter
      // $to = "aglanton31@ya.ru";
      $to = "vw-to@ya.ru";
      $subject = "VW-TO";
    
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
        "<ul>" .
        "<li><b>Имя:</b> $name</li>" .
        "<li><b>Номер:</b> $number</li>" .
        "<li><b>Vin код:</b> $vincode</li><br>" .
        $filterMessage .
        $oilMessage .
        $brakeMessage .
        $liquidMessage;
    
      if (!empty($comment)) {
        $comment = nl2br($comment);
        $message .= "<li><b>Комментарий:</b></li> $comment";
      }
    
      $message .= "</ul>";
    
      $headers  = "Content-type: text/html; charset=UTF-8 \r\n";
    
      // send letter
      if ( mail ($to, $subject, $message, $headers) ) {
        $answerMessage = 
          "<h1>Спасибо за заказ!</h1>" .
          "<p>Скоро к вам на почту придут цены</p>" .
          "<h2>Ваши данные:</h2>" .
          $message;
        echo $answerMessage;
        
        // mail ($email, "Спасибо за заказ!", $answerMessage, $headers);
        
      } else {
        echo "
          <h1>Упс, что-то пошло не так!</h1>
          <p>Попробуте отправить форму ещё раз</p>
          <button class='button repeat' onclick='window.location.reload()'>Повторить</button>
          <h2>Ваши данные:</h2>
          $message
        ";
      }
  } else {
      echo "
        <h1>Упс, что-то пошло не так!</h1>
        <p>Попробуте отправить форму ещё раз</p>
        <button class='button repeat' onclick='window.location.reload()'>Повторить</button>
        <h2>Ваши данные:</h2>
      ";
  }
?>

<a href="../" class='button'>Вернуться</a>

</body>
</html>