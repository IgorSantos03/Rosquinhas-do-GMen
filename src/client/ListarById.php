<?php
include("../conexao.php");

$nome = $_POST['nome'];
$sql = "select * from cliente where nome = '$nome'";
$result = $conn1->query($sql);
$row = $result->fetch_array(MYSQLI_ASSOC);


echo json_encode($row);