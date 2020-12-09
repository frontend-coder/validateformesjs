<?php

/* https://api.telegram.org/bot1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */



$projectname = $_POST['name-project'];
$formsubject = $_POST['form_subject'];
$formplace = $_POST['position-place'];
$formoption = $_POST['option-forme'];

$name = $_POST['name'];
$phone = $_POST['phone'];
$mytheme = $_POST['massage'];
$agree_form = $_POST['agree'];

$token = "1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ";
$chat_id = "-330347791";
$arr = array(
  'Название проекта: ' => $projectname,
  'Предмет сообщения: ' => $formsubject,
	'Место размещения формы: ' => $formplace,
	'Опции формы: ' => $formoption,
		
	
	'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Тема сообщения' => $mytheme,
  'Согласие на обработку' => $agree_form
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>
