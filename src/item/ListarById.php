<?php
include("../conexao.php");

$id = $_POST['id'];
$sql = "select * from item where idItem = $id";
$result = $conn1->query($sql);
$row = $result->fetch_array(MYSQLI_ASSOC);


echo json_encode($row);