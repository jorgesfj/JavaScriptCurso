function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano ){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'criançam.png')

            }else if(idade<21){
                img.setAttribute('src', 'adolescentem.png')
            }else if(idade<50){
                img.setAttribute('src', 'adultom.png')
            }else{
                img.setAttribute('src', 'idosom.png')
            }
        }else{
            genero = 'mulher'
            if(idade>=0 && idade<10){
                img.setAttribute('src', 'criançaf.png')
            }else if(idade<21){
                img.setAttribute('src', 'adolescentef.png')
            }else if(idade<50){
                img.setAttribute('src', 'adultaf.png')
            }else{
                img.setAttribute('src', 'idosaf.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade é ${idade} e genero é ${genero}`
        res.appendChild(img)
    }
}