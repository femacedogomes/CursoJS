function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')  
    var data = new Date() 
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora>5 && hora<12){
        // BOM DIA!
        img.src = "imagens/manha.png"
        document.body.style.background = '#e2cd9f' 
    } else if (hora < 18){
        // BOA TARDE!
        img.src = "imagens/tarde.png"
        document.body.style.background = '#318ee6'
    } else {
        // BOA NOITE!
        img.src = "imagens/noite.png"
        document.body.style.background = '#515154'
    }
}
