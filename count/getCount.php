<?php
// �}�C�T�C�g�\�[�V�����{�^���J�E���g�擾PHP 9�T�C�g 2018.3.7  urbanqee.com                      // 

// *���C�� ****************************************
if (!empty($_GET['countid'])) {
    $id   = empty($_GET['countid']) ? "" : $_GET['countid'];
    $res = getVoteCount($id);
    echo json_encode($res);
 } else {
    echo json_encode("syntax error");
 }

// *�֐� ******************************************

function getVoteCount($id){
 //print "***********************";
 //�J�E���g�������������Ă���t�@�C����
 $fileName = "log/" . $id . ".count";

 //fopen�Ńt�@�C����ǂݍ��� (�ǂݍ��݃��[�h)
 $fp = @fopen($fileName , "r");

 if($fp){
 //�J�E���g���������ݍς݂̃t�@�C���̓��e���擾
 $vote = fgets($fp , 9182);
 }else{
 $vote = 0;
  }

return $vote;
}


?>