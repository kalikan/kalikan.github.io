<?php
//vote.php

//////ajax�f�[�^����M1
$file_id = $_POST["file_id"];     //�t�@�C����
$lock_id = $_POST["lock_id"];     //�r������id 2018.3.15
$timer = $_POST["cookie_time"];   //�N�b�L�[�̗L�����ԁi�b)2018.3.24
$count = $_POST["count"];         //���[��
$ipadd = $_SERVER["REMOTE_ADDR"];  //IP�A�h���X             2018.12.01
$ipadd = str_replace('.', '', $ipadd); //IP�A�h���X . �폜  2018.12.01       
$cookieName = $ipadd . $lock_id; //$file_id; //�N�b�L�[���B 2018.12.01
$cookieTime = time() + $timer;    //�N�b�L�[�̗L�������i���[�𐧌�����b���j time()+60*60*24*30 �̓N�b�L�[�̗L�������� 30 ����ɃZ�b�g

///////�N�b�L�[���L��
if(isset($_COOKIE[$cookieName])){
     echo "�N�b�L�[����ɂ�蓊�[�s�ł��B";

}else{
///////�N�b�L�[���������J�E���g�A�b�v
     $count = $_POST["count"]; //���[��

     //�J�E���g���������o���t�@�C����
     $fileName = "log/" . $file_id . ".count";

     $fp = @fopen($fileName , "w"); //�������݃��[�h�ŊJ��
     
     flock($fp , LOCK_EX); //�r���I���b�N(��������) ���̃��b�N�����ׂău���b�N
     fputs($fp , $count); //�J�E���g������������
     flock($fp , LOCK_UN); //���b�N�J��
     fclose($fp);

     setcookie($cookieName , $count , $cookieTime); //10�b�L���̃N�b�L�[���Z�b�g

     echo "Complete"; //clickCount.js�ɂ͂����̒l��Ԃ�
}
?>