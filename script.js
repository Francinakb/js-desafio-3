
const arreglo = [function sumar(numero1, numero2) {
    return numero1 + numero2
},

function restar(numero1, numero2) {
    return numero1 - numero2
},

function multiplicar(numero1, numero2) {
    return numero1 * numero2
},

function dividir(numero1, numero2) {
    return numero1 / numero2
}]
let resultado = []

function funcionOperation() {
    let numerodeveces = prompt('cuantas veces quiere operar')

    for (let i = 0; i < numerodeveces; i++) {
        let numero1 = parseFloat(prompt("Ingrese un numero"))
        let numero2 = parseFloat(prompt("Ingrese otro numero"))
        let operacion = prompt("Ingrese una operacion")

        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Ingresar numero validos")
        }
        else if (numero2 === 0 && operacion === "/") {
            alert("No se puede dividir con 0")
        } else {

            switch (operacion) {
                case "+":
                    alert(arreglo[0](numero1, numero2))
                resultado.push(arreglo[0](numero1, numero2))
                    console.log(resultado)
                    break
                case "-":
                    alert(arreglo[1](numero1, numero2))
                    resultado.push(arreglo[1](numero1, numero2))

                    break
                case "*":
                    alert(arreglo[2](numero1, numero2))
                        resultado.push(arreglo[2](numero1, numero2))

                    break
                case "/":
                    alert(arreglo[3](numero1, numero2))
                            resultado.push(arreglo[3](numero1, numero2))

                    break
                default:
                    alert("No se puede realizar esta operacion")
                    resultado.push(arreglo[4](numero1, numero2))
                    break
            }
        }
    }
    alert(resultado)
}

funcionOperation()

let operacion, number