let string = prompt("Quais caracteres você deseja inverter?")
let stringInvertida = ''

for(let i = string.length - 1; i>= 0; i--){
    stringInvertida += string[i]
}

alert(stringInvertida)