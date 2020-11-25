<?php

$server_request = filter_input(INPUT_SERVER, "REQUEST_METHOD", FILTER_DEFAULT);

if (!empty($server_request)) {
    if ($server_request == 'POST') {
        $post = filter_input_array(INPUT_POST, FILTER_DEFAULT);
        $post['success'] = true;

        //rotina de cadastro
        echo json_encode($post);
    }

    if ($server_request == 'GET') {
        $return = [
            "course" => "jQuery Essentials",
            "module" => "AJAX com jQuery",
            "student" => filter_input(INPUT_GET, "user"),
            "success" => true
        ];
        echo json_encode($return);
    }
}
