function contar(){
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resposta = window.document.getElementById('res')
    resposta.innerHTML = 'Contando: '
    if(inicio.value.length==0|| fim.value.length==0 || passo.value.length==0 || Number(passo.value) <1){
        window.alert('[ERRO] Preenchimento incorreto: \n'+
        'Verifique se a variável Passo é >= 0 ou\n'
        +'Se todos os campos estão preenchidos')
    }else{
        if(Number(inicio.value)<Number(fim.value)){
            for(var c = Number(inicio.value); c<=Number(fim.value); c+=Number(passo.value)){
                resposta.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(var c = Number(inicio.value);c>=Number(fim.value);c-=Number(passo.value)){
                resposta.innerHTML+=`${c} \u{1F449}`
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}