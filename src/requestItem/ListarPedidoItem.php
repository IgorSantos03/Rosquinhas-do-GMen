<?php

include("../conexao.php");


$id = isset($_GET["id"]) ? intval($_GET["id"]) : 0; 

if ($id <= 0) {
    echo json_encode(["error" => "ID inválido."]);
    exit;
}


$sql = "SELECT * FROM pedidoitens WHERE idPedido = $id"; 
$stmt = $conn1->prepare($sql);


$stmt->execute();
$result = $stmt->get_result();

if (!$result) {
    echo json_encode(["error" => "Erro ao executar a consulta: " . $conn1->error]);
    exit;
}


$data = [];
while ($row = $result->fetch_assoc()) {
    $data[] = $row; 
}

// Retornar os dados como JSON
header("Content-Type: application/json");
echo json_encode($data);

