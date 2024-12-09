<?php
include('../conexao.php');

$edit = (isset($_POST["edit"]) ? $_POST["edit"] : "");
$id = null;
$idPedido = (isset($_POST["idP"]) ? $_POST["idP"] : "");
$idItem = (isset($_POST["idItem"]) ? $_POST["idItem"] : "");
$quantidade = (isset($_POST["quantidade"]) ? $_POST["quantidade"] : "");
$valorUni = (isset($_POST["valorUni"]) ? $_POST["valorUni"] : "");
$valorT = (isset($_POST["valorT"]) ? $_POST["valorT"] : "");

$sql1 = "select * from item where idItem = $idItem";

$result = $conn1->query($sql1);
$row = $result->fetch_assoc();

$valorUni = $row["precoUnitario"];
$valorT = $quantidade * $row["precoUnitario"];


if ($edit == 1) {
    $sql = "UPDATE `pedidoitens` SET  `quantidade` = '$quantidade', `idItem` = '$idItem' WHERE `pedidoitens`.`idPedido` = '$idPedido' and `pedidoitens`.`idItem`= '$idItem'";
} else {
    $sql = "INSERT INTO `pedidoitens` VALUES ('$id','$idPedido','$idItem' ,'$quantidade', '$valorUni', '$valorT');";
}

mysqli_query($conn1, $sql);

$mensagem = $sql;

echo json_encode($mensagem
);
