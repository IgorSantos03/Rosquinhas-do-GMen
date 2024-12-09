<?php
include ('../conexao.php');

$id = (isset($_GET["id"]) ? $_GET["id"] : "");

$sql ="DELETE FROM `pedidoitens` WHERE `pedidoitens`.`id` = $id";
mysqli_query($conn1, $sql);

$mensagem = $sql;

echo json_encode(
    ["mensagem" => $mensagem]
);