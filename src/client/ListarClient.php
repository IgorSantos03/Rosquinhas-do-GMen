<?php
include("../conexao.php");


$sql = "select * from cliente";

$result = $conn1->query($sql);
$data = [];
while ($row = $result->fetch_array(MYSQLI_ASSOC)){

   array_push($data, $row);

}
            
echo json_encode($data);