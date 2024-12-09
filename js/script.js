$(document).ready(function () {


    $("#bt-client").click(function () {
        saveClient();
    });

    $("#bt-item").click(function () {
        saveItem();
    });

    $("#bt-request").click(function () {
        saveRequest();
    });

    // $("#bt-pedido").click(function () {
    //     savePedidoItem();
    // });

    $(".pedidoForm2").css("visibility", "hidden");
});

// Cliente ------------------------------------------------
function saveClient() {
    // declaração das variáveis
    const edit = $("#edit").val();
    const nome = $("#nome").val();
    const telefone = $("#telefone").val();
    //toda a aquisição ajax
    $.post("src/client/saveClient.php", { nome: nome, telefone: telefone, edit: edit }, function (data) {
        // tratamento de dados
        console.log(data);


    });
    saveRequest(nome);
    $(".pedidoForm").css("visibility", "hidden");
}

function ListClient() {
    $.get("src/client/ListarClient.php", function (response) {
        const data = JSON.parse(response);
        var html = ``;
        var cliente = document.getElementById("listarClient");
        html += `<table id="itemTable" class="table table-striped mt-3">`;
        html += `
            <thead>
                <tr>
                    <th>Nome Cliente</th>
                    <th>Recorrente</th>
                    <th>Telefone</th>
                </tr>
            </thead>
            <tbody>`;
        data.map(function (item) {
            html += `   
                <tr>                  
                    <td>${item.nome}</td>
                    <td>${item.telefone}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="EditaCliente('${item.nome}')">Editar</button>| 
                        <button class="btn btn-danger btn-sm" onclick="DeleteClient('${item.nome}')">Excluir</button>
                    </td>
                </tr>`;
        });
        html += `
        </tbody>
        </table>`
        cliente.innerHTML = html;
    });
}

function DeleteClient(nome) {
    $.post("src/client/DeleteClient.php", { nome: nome }, function (response) {
        ListClient();
    });
}

function EditaCliente(nome) {
    $.post("src/client/ListarById.php", { nome: nome }, function (response) {
        var data = JSON.parse(response);
        var nome = document.getElementById("nome");
        var recorrente = document.getElementById("recorrente");
        var telefone = document.getElementById("telefone");

        edit.value = 1;
        telefone.value = data.telefone;
        nome.value = data.nome;
        recorrente.value = data.recorrente;
    });
}

// Pedido --------------------------------------------------
function saveRequest(nome) {
    const edit = $("#edit").val();
    const numero = Math.floor(Math.random() * 10000);
    const data = $("#data").val();
    $.post("src/request/saveRequest.php", { numero: numero, data: data, nome: nome, edit: edit }, function (data) {
        const dat = JSON.parse(data);
        var html = ``;
        html += `
        <h2>Conteúdo do Pedido</h2>
        <form>
        <input type="hidden" value="0" id="edit">
            <!-- Campo ID Pedido -->
            <div class="mb-3 " id="inputId">
                    <label for="idPedido" class="form-label">ID Pedido</label>             
        <input type="text" class="form-control" id="idP" value="${dat.id}" name="idPedido" disabled>
            </div>
            <div id="selectItem">`


        html += `
            </div>
            <!-- Campo Quantidade -->
            <div class="mb-3">
                <label for="quantidade" class="form-label">Quantidade</label>
                <input type="number" class="form-control" id="quantidade" name="quantidade"
                    placeholder="Digite a quantidade">
            </div>

            <!-- Campo Preço Unitário -->

            <!-- Botão de Envio -->
            <button type="button" class="btn btn-primary" id="bt-pedido" onclick="savePedidoItem()">Add no Pedido</button>
            <button class="btn btn-primary" type="submit" >Fianlizar Pedido</button>
        </form>
`
        selectItem();
        document.getElementById("pedidoForm2").innerHTML = html;

    });

    $(".pedidoForm2").css("visibility", "visible");


}

function ListRequest() {
    $.get("src/request/ListarRequest.php", function (response) {
        const data = JSON.parse(response);
        var html = ``;
        var request = document.getElementById("listarRequest");
        html += `<table id="itemTable" class="table table-striped mt-3">`;
        html += `
            <thead>
                <tr>
                    <th>Número pedido</th>
                    <th>Data</th>
                    <th>Clinte</th>
                </tr>
            </thead>
            <tbody>`;
        data.map(function (item) {
            html += `   
                <tr>                  
                    <td>${item.numero}</td>
                    <td>${item.data}</td>
                    <td>${item.nome}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="EditaRequest(${item.numero})">Editar</button>| 
                        <button class="btn btn-danger btn-sm" onclick="DeleteRequest(${item.numero})">Excluir</button>
                    </td>
                </tr>`;
        });
        html += `
        </tbody>
        </table>`
        request.innerHTML = html;
    });
}

function DeleteRequest(id) {
    $.post("src/request/DeleteRequest.php", { id: id }, function (response) {
        ListRequest();
    });
}

function EditaRequest(id) {
    $.post("src/request/ListarById.php", { id: id }, function (response) {
        var data = JSON.parse(response);
        var id = document.getElementById("numero");
        var status = document.getElementById("status");

        edit.value = 1;
        id.value = data.numero;
        status.value = data.status;
    });
}

// Item ----------------------------------------------------

function saveItem() {
    const edit = $("#edit").val();
    const idItem = $("#idItem").val();
    const preco = $("#preco").val();
    const quantidade = $("#quantidade").val();
    const unidade = $("#unidade").val();
    $.post("src/item/saveItem.php", { idItem: idItem, preco: preco, quantidade: quantidade, unidade: unidade, edit: edit }, function (data) {
        alert(data);
    });
}

function selectItem() {
    $.get("src/item/ListarItem.php", function (response) {
        const data = JSON.parse(response);
        var html = ``;
        var item = document.getElementById("selectItem");
        html += `<!-- Campo ID Produto (Select) -->
        <div class="mb-3">
            <label for="idProduto" class="form-label">Número do Pedido</label>
             <select class="form-select" id="idItem" name="idItem">
                <option selected disabled>Escolha a Rosquinha</option>
            
        `
        data.map(function (item) {

            html += `
                <option value="${item.idItem}">${item.nome}</option>  `;

        });
        html += `</select>
        </div>`
        item.innerHTML = html;
    });
}


function ListItems() {
    $.get("src/item/ListarItem.php", function (response) {
        const data = JSON.parse(response);
        var html = ``;
        var item = document.getElementById("listarItem");
        html += `<table id="itemTable" class="table table-striped mt-3">`;
        html += `
            <thead>
                <tr>
                    <th>ID do Item</th>
                    <th>Preço</th>
                    <th>Quantidade</th>
                    <th>Unidade</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>`;
        data.map(function (item) {
            html += `   
                <tr>                  
                    <td>${item.idItem}</td>
                    <td>${item.preco}</td>
                    <td>${item.quantidade}</td>
                    <td>${item.unidade}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="EditaItem(${item.idItem})">Editar</button>| 
                        <button class="btn btn-danger btn-sm" onclick="DeleteItem(${item.idItem})">Excluir</button>
                    </td>
                </tr>`;
        });
        html += `
        </tbody>
        </table>`
        item.innerHTML = html;
    });
}

function DeleteItem(id) {
    $.post("src/item/DeleteItem.php", { id: id }, function (response) {
        ListItems();
    });
}

function EditaItem(id) {
    $.post("src/item/ListarById.php", { id: id }, function (response) {
        var data = JSON.parse(response);
        var id = document.getElementById("idItem");
        var preco = document.getElementById("preco");
        var quantidade = document.getElementById("quantidade");
        var unidade = document.getElementById("unidade");
        var edit = document.getElementById("edit");

        edit.value = 1;
        unidade.value = data.unidade;
        id.value = data.idItem;
        preco.value = data.preco;
        quantidade.value = data.quantidade;
    });
}


// PedidoItens
// ---------------------------------------------------------------------------

function savePedidoItem() {
    const edit = $("#edit").val();
    const idPedido = $("#idP").val()
    const idItem = $("#idItem").val();
    const quantidade = $("#quantidade").val();
    $.post("src/requestItem/saveRequestItem.php", { idItem: idItem, idP: idPedido, quantidade: quantidade, edit: edit }, function (data) {
        listarPedidoId(idPedido);

    });
}

function listarPedidoId(id) {
    $.get("src/requestItem/ListarPedidoItem.php",{id : id}, function (response) {
        // const data = JSON.parse(response);
        var html = ``;
        var tabela = document.getElementById("tabelaPedido");
        html += `
        <h2 class="mb-4">Tabela de Pedidos</h2>
        <table class="table table-bordered table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Pedido</th>
                    <th>idItem</th>
                    <th>Quantidade</th>
                    <th>Valor Unitário</th>
                    <th>Valor Total</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>`;
        response.map(function (item) {
            html += `   
                <tr>                  
                    <td>${item.idPedido}</td>
                    <td>${item.idItem}</td>
                    <td>${item.quantidade}</td>
                    <td>${item.valorUni}</td>
                    <td>${item.valorTotal}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="EditaPedidoItens(${item.id})">Editar</button>| 
                        <button class="btn btn-danger btn-sm" onclick="DeletePedidoItem(${item.id}, ${item.idPedido})">Excluir</button>
                    </td>
                </tr>`;
        });
        html += `
        </tbody>
        </table>
        `
        tabela.innerHTML = html;
    });
}

function DeletePedidoItem(id, idP) {
    $.get("src/requestItem/DeletePedidoItem.php", { id: id }, function (response) {
        listarPedidoId(idP);
    });
}

function EditaPedidoItens(id) {
    $.post("src/requestItem/listaById.php", { id: id }, function (response) {
        var data = JSON.parse(response);
        var id = document.getElementById("idP");
        var quantidade = document.getElementById("quantidade");
        var idItem = document.getElementById("idItem");
        var edit = document.getElementById("edit");

        edit.value = 1;
        idItem.value = data.idItem;
        quantidade.value = data.quantidade;

        $("#selectItem").prop('disabled',true);
    });
}


// const data = JSON.parse(response);
// var id = document.getElementById("id");
// var nome = document.getElementById("nome");
// var email = document.getElementById("email");

// email.value = data.email;
// id.value = data.id;
// nome.value = data.nome;
