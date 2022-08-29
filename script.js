const arreglo = [function sumar (numero1, numero2){           
    return numero1 + numero2
},

function restar (numero1, numero2){        
    return numero1 - numero2
},

function multiplicar(numero1, numero2){         
    return numero1 * numero2
},

function dividir(numero1, numero2){          
    return numero1 / numero2
}]

let numero1, numero2, operacion

do{
    numero1 = parseFloat (prompt("Ingrese un numero"))
    numero2 = parseFloat (prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operacion")

    if(isNaN(numero1) || isNaN(numero2)){
        alert ("Ingresar numero validos")
    }
    if(numero2 === 0 && operacion === "/"){
        alert ("No se puede dividir con 0")
    }
}while((isNaN(numero1) || isNaN(numero2)) || (numero2 === 0 && operacion === "/"))         

switch(operacion){
    case "+":
    alert(arreglo[0](numero1, numero2))
    break
    case "-":
    alert(arreglo[1](numero1, numero2))
    break
    case "*":
    alert(arreglo[2](numero1, numero2))
    break
    case "/":
    alert(arreglo[3](numero1, numero2))
    break
    default:
    alert("No se puede realizar esta operacion")
    break
}