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

});

// Cliente ------------------------------------------------
function saveClient() {
    // declaração das variáveis
    const edit = $("#edit").val();
    const nome = $("#nome").val();
    const recorrente = $("#recorrente").val();
    const telefone = $("#telefone").val();
    //toda a aquisição ajax
    $.post("src/client/saveClient.php", { nome: nome, recorrente: recorrente, telefone: telefone, edit: edit }, function (data) {
        // tratamento de dados
        alert(data);
    });
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
                    <td>${item.recorrente}</td>
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
function saveRequest() {
    const edit = $("#edit").val();
    const numero = $("#numero").val();
    const data = $("#data").val();
    const status = $("#status").val();
    $.post("src/request/saveRequest.php", { numero: numero, data: data, status: status, edit: edit }, function (data) {
        alert(data);
    });
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
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>`;
        data.map(function (item) {
            html += `   
                <tr>                  
                    <td>${item.numero}</td>
                    <td>${item.data}</td>
                    <td>${item.status}</td>
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
// const data = JSON.parse(response);
// var id = document.getElementById("id");
// var nome = document.getElementById("nome");
// var email = document.getElementById("email");

// email.value = data.email;
// id.value = data.id;
// nome.value = data.nome;
