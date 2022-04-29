function Calcular() {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e teste novamente!')
    }   else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        if (fsex[0].checked) {
            var gênero = 'Homem'
            if (idade < 10 && idade>0){
                //criança
                img.setAttribute('src','imagens/homem-bb.png')
                var gênero = 'uma criança'
            }else if (idade < 20){
                // Jovem
                img.setAttribute('src', 'imagens/homem-adulto.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/homem-adulto.png')
            }else {
                //idoso
                img.setAttribute('src','imagens/homem-idoso.png')
            }
        } else if(fsex[1].checked){
            var gênero = 'Mulher'
            if (idade < 10 && idade>0){
                //criança
                img.setAttribute('src','imagens/mulher-bb.png')
                var gênero = 'uma criança'
            }else if (idade < 20){
                // Jovem
                img.setAttribute('src','imagens/mulher-adulta.png')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','imagens/mulher-adulta.png')
            }else {
                //idoso
                img.setAttribute('src','imagens/mulher-idosa.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    
}


/*var nasc =(window.document.querySelector('input#txtano')
var idade = Number(nasc.value)
var res = window.document.querySelector('div#res')
res.innerHTML = `Você tem ${idade} anos`*/