<?php
include ('../conexao.php');

$edit = (isset($_POST["edit"]) ? $_POST["edit"] : "");
$idItem = (isset($_POST["idItem"]) ? $_POST["idItem"] : "");
$preco = (isset($_POST["preco"]) ? $_POST["preco"] : "");
$quantidade = (isset($_POST["quantidade"]) ? $_POST["quantidade"] : "");
$unidade = (isset($_POST["unidade"]) ? $_POST["unidade"] : "");

if( $edit == 1 ){
    $sql = "UPDATE `item` SET `idItem` = '$idItem', `preco` = '$preco', `quantidade` = '$quantidade', `unidade`= '$unidade' WHERE `item`.`idItem` = $idItem;";
}else{
    $sql = "INSERT INTO `item` VALUES ('$idItem', '$preco','$quantidade','$unidade');";
}

mysqli_query($conn1, $sql);

$mensagem = "deu bom";

echo json_encode(
    ["mensagem" => $mensagem]
);