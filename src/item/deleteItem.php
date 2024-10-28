<?php
include ('../conexao.php');

$id = (isset($_POST["id"]) ? $_POST["id"] : "");

$sql ="DELETE FROM `item` WHERE `item`.`idItem` = $id";
mysqli_query($conn1, $sql);

$mensagem = $sql;

echo json_encode(
    ["mensagem" => $mensagem]
);