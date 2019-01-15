<?php
//vote.php

//////ajaxデータを受信1
$file_id = $_POST["file_id"];     //ファイル名
$lock_id = $_POST["lock_id"];     //排他制御id 2018.3.15
$timer = $_POST["cookie_time"];   //クッキーの有効時間（秒)2018.3.24
$count = $_POST["count"];         //投票数
$ipadd = $_SERVER["REMOTE_ADDR"];  //IPアドレス             2018.12.01
$ipadd = str_replace('.', '', $ipadd); //IPアドレス . 削除  2018.12.01       
$cookieName = $ipadd . $lock_id; //$file_id; //クッキー名。 2018.12.01
$cookieTime = time() + $timer;    //クッキーの有効期限（投票を制限する秒数） time()+60*60*24*30 はクッキーの有効期限を 30 日後にセット

///////クッキーが有効
if(isset($_COOKIE[$cookieName])){
     echo "クッキー制御により投票不可です。";

}else{
///////クッキーが無効＝カウントアップ
     $count = $_POST["count"]; //投票数

     //カウント数を書き出すファイル名
     $fileName = "log/" . $file_id . ".count";

     $fp = @fopen($fileName , "w"); //書き込みモードで開く
     
     flock($fp , LOCK_EX); //排他的ロック(書く準備) 他のロックをすべてブロック
     fputs($fp , $count); //カウント数を書き込み
     flock($fp , LOCK_UN); //ロック開放
     fclose($fp);

     setcookie($cookieName , $count , $cookieTime); //10秒有効のクッキーをセット

     echo "Complete"; //clickCount.jsにはここの値を返す
}
?>