let num = document.querySelector('input#txtnum')
let lista = document.getElementById('tabela')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar(){
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        valores.sort()
        let x = (tot-1)
        let menor = valores[0]
        let maior = valores[x]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
        }
        media = (soma/tot)
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> O menor número da lista é o ${menor}.</p>`
        res.innerHTML += `<p>O maior número da lista é o ${maior}.</p>`
        res.innerHTML += `<p>O soma dos valores é igual a ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é igual a ${media}.</p>`
}
}
/*function adicionar(){
    var num = document.querySelector('input#txtnum')
    if (num.value.length==0){
        return window.alert('Por favor digitar um Numero')
    }else{
        num = Number(num.value)
        var tab = document.getElementById('tabela')
        var item = document.createElement('option')
        item.innerHTML = `Valor ${num} adicionado.`
        tab.appendChild(item)
        x = []
        x.push(num)
    } return x
}
function finalizar(){
    let res = document.querySelector('div#final')
    res.innerHTML = x   
}*/

