<?php

// pedido id, produto, qtd, valor unit, valor total
class PedidoItem
{
    private $id;
    private $pedido_id;
    private $produto;
    private $quantidade;
    private $valor_unitario;
    private $valor_total;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getPedido_id()
    {
        return $this->pedido_id;
    }
    public function setPedido_id($pedido_id)
    {
        $this->pedido_id = $pedido_id;
    }

    public function setProduto(Produto $produto)
    {
        $this->produto = $produto;
    }

    public function getProduto()
    {
        return $this->produto;

    }
    public function setQuantidade($quantidade)
    {
        $this->quantidade = $quantidade;
    }
    public function getQuantidade()
    {
        return $this->quantidade;
    }

    public function setValor_unitario( $valor_unitario)
    {
        $this->valor_unitario = $valor_unitario;
    }
    public function getValor_unitario()
    {
        return $this->valor_unitario;
    }


    public function setValor_total($valor)
    {
        $this->valor_total = $valor;
    }

    public function getValor_total()
    {
        return $this->valor_total;
    }

}