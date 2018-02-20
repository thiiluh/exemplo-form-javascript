let botao_enviar = document.querySelector("#enviar")

botao_enviar.addEventListener("click", function (event) {
    //função para tirar o evento padrão do botão
    event.preventDefault();

    let form = document.querySelector("#form-cadastro")

    let cliente = obtemClienteDoFormulario(form)

    let tabela = document.querySelector("#body-tabela-cleintes")

    let clienteTr = montaTr(cliente, tabela)

    //Inserir a nova Tr como filha da tag table
    tabela.appendChild(clienteTr)

    form.reset()


})

function obtemClienteDoFormulario(form) {

    let cliente = {
        nome: form.nome.value,
        funcao: form.funcao.value,
        email: form.email.value

    }

    return cliente
}


function montaTr(cliente, tabela) {
    var clienteTr = document.createElement("tr")

    clienteTr.appendChild(montaTh((contaLinhasTabela(tabela) + 1), "row"))

    clienteTr.appendChild(montaTd(cliente.nome))
    clienteTr.appendChild(montaTd(cliente.funcao))
    clienteTr.appendChild(montaTd(cliente.email))

    return clienteTr
}

function montaTd(dado) {
    var td = document.createElement("td")

    td.textContent = dado

    return td
}

function montaTh(dado, classe) {
    var th = document.createElement("th")
    th.scope = classe
    th.textContent = dado

    return th;
}


function contaLinhasTabela(tabela) {
    let linha = tabela.getElementsByTagName('tr').length
    return linha
}