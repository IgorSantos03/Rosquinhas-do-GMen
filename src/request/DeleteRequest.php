<?php
include ('../conexao.php');

$id = (isset($_POST["id"]) ? $_POST["id"] : "");

$sql ="DELETE FROM pedido WHERE `pedido`.`numero` = $id";
mysqli_query($conn1, $sql);
