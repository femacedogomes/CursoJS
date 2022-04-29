function Calcular(){
var inicio = document.querySelector('input#txtini');
var fim= document.querySelector('input#txtfim');
var passo= document.querySelector('input#txtpas');
var res = document.querySelector('div#res');

if (inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
    window.alert('[ERRO] Faltam dados!')
} else {
    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)
    if (passo <=0) {
        window.alert('passo inválido! será considerado passo = 1')
        var passo = 1
    }
    if (inicio < fim) {
        //contagem crescente
        for (inicio; inicio <= fim; inicio += passo){
            res.innerHTML += `${inicio} \u{1F449} `    
        }
    } else {
        //contagem regressiva
        for (inicio; inicio >= fim; inicio -= passo){
            res.innerHTML += `${inicio} \u{1F449} `  
        }  
    }
    res.innerHTML += ' acabou \u{270B}'
    }
}
/*var inicio = 1
var fim = 10
var passo = 2

while (inicio <= fim){
    console.log(inicio)
    inicio = inicio + passo
}*/