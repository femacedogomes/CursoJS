function calcular(){
    var num = document.querySelector('input#txtnum')
    var tab = document.getElementById('tab')
    if (num.value.length == 0){
        window.alert('[ERRO] Digite um numero')
    }
    else{
        var num = Number(num.value)
        tab.innerHTML = ''
        for(var c = 1 ; c <= 10; c++){
            var mult = num*c
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${mult} `
            item.value = `tab${c}` 
            tab.appendChild(item)
        }
    }

}