<?php
include ('../conexao.php');

$edit = (isset($_POST["edit"]) ? $_POST["edit"] : "");
$status = (isset($_POST["status"]) ? $_POST["status"] : "");
$numero = (isset($_POST["numero"]) ? $_POST["numero"] : "");
$data = date('Y/m/d');

if( $edit == 1 ){
    $sql = "UPDATE `pedido` SET  `status` = '$status' WHERE `pedido`.`numero` = $numero;";
}else{
    $sql = "INSERT INTO `pedido` VALUES ('$numero','$data' ,'$status');";
}

mysqli_query($conn1, $sql);

$mensagem = $sql;

echo json_encode(
    ["mensagem" => $mensagem]
);

// 