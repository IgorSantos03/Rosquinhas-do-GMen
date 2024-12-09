<?php
include ('../conexao.php');

$edit = (isset($_POST["edit"]) ? $_POST["edit"] : "");
$nome = (isset($_POST["nome"]) ? $_POST["nome"] : "");
$numero = (isset($_POST["numero"]) ? $_POST["numero"] : "");
$data = date('Y/m/d');

if( $edit == 1 ){
    $sql = "UPDATE `pedido` SET  `nome` = '$nome' WHERE `pedido`.`numero` = $numero;";
}else{
    $sql = "INSERT INTO `pedido` VALUES ('$numero','$data','$nome');";
}

mysqli_query($conn1, $sql);

$mensagem = $sql;

echo json_encode(
    ["id" => $numero]
);

// 