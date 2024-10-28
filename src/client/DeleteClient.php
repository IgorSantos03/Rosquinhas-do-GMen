<?php
include ('../conexao.php');

$nome = (isset($_POST["nome"]) ? $_POST["nome"] : "");

$sql ="DELETE FROM cliente WHERE `cliente`.`nome` = '$nome'";
mysqli_query($conn1, $sql);
