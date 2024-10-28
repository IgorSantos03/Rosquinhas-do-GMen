<?php
include ('../conexao.php');

$edit = (isset($_POST["edit"]) ? $_POST["edit"] : "");
$nome = (isset($_POST["nome"]) ? $_POST["nome"] : "");
$recorrente = (isset($_POST["recorrente"]) ? $_POST["recorrente"] : "");
$telefone = (isset($_POST["telefone"]) ? $_POST["telefone"] : "");

if( $edit == 1 ){
    $sql = "UPDATE `cliente` SET `recorrente` = '$recorrente', `telefone` = '$telefone' WHERE `cliente`.`nome` = '$nome';";
}else{
    $sql = "INSERT INTO `cliente` VALUES ('$nome', '$recorrente','$telefone');";
}


mysqli_query($conn1, $sql);

$mensagem = "deu bom";

echo json_encode(
    ["mensagem" => $mensagem]
);