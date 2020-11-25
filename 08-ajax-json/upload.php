<?php

usleep(400000);

$getPost = filter_input_array(INPUT_POST, FILTER_DEFAULT);
$getFile = $_FILES;

$response["post"] = $getPost;
$response["image"] = $getFile;

if ($getFile) {
    if (!file_exists("upload")) {
        mkdir("uploads", 0755);
    }
    //NÃO ESQUEÇA DE VALIDAR O ARQUIVO ANTES DE FAZER UPLOAD
    //consulte mime/types para validar pelo $getFile['photo']['type'];
    move_uploaded_file($getFile['photo']['tmp_name'], "uploads/{$getFile['photo']['name']}");
}

echo json_encode($response);
