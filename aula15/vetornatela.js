let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
/*for(var c=0; c < valores.length;c++)
console.log(valores[c])*/

for(let c in valores){
  console.log(`a posição ${c} tem o valor ${valores[c]}`)  
}
 