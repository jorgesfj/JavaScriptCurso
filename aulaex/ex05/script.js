let lista = []
var sel = window.document.getElementById('select')
function adicionar(){
    var receive = window.document.getElementById('number')
    var numero = Number(receive.value)
    if(receive.length<=0 || numero<1 || numero>100){
        window.alert("Número inválido, verifique e digite novamente")
    }else{
        lista.push(numero)
        var item = window.document.createElement('option')
        item.text = `Valor ${numero} adicionado` 
        sel.appendChild(item)
    }
    window.document.getElementById('number').value = ''
    window.document.getElementById('res').innerHTML = ''
}

function finalizar(){
    lista.sort()
    var sum = 0
    for(var i =0; i<lista.length; i++){
        sum += lista[i]
    }

    var resposta = window.document.getElementById('res')
    resposta.innerHTML = `Ao todo ${lista.length} foram cadastrados <br/>`+
    `O maior valor é ${lista[lista.length-1]} <br/>`+
    `O menor valor é ${lista[0]} <br/>`+
    `A soma de todos os valores é ${sum} <br/>`+
    `A média dos valores da lista é ${sum/lista.length}`

}