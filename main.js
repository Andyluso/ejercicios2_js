/* let numero1 = 2
let numero2 = 10
let numero3 = 5 */

/* if (numero1 > numero2) {
    console.log("El primer numero es mayor que el segundo. ")
} else {
    console.log("El primer numero no es mayor que el segundo. ")
} */

//punto 2

/* if(numero1 === numero2) {
    console.log("Los numeros son iguales. ")
} else {
    console.log("Los numeros son diferentes. ")
} */

//Punto 3

/* if(numero1 > numero2) {
    console.log("El primer numero es mas grande. ")
} else if (numero2 > numero1){
    console.log("el segundo numero es mas grande. ")
} else {
    console.log("Los numeros son iguales .")
} */

//Punto 4

/* if(numero1 < numero2 && numero1 < numero3) {
    console.log("El primer numero es el mas pequeño. ")
} else if (numero2 < numero1 && numero2 < numero3){
    console.log("El segundo numero es el mas pequeño")
} else {
    console.log("El tercer numero es el mas pequeño")
} */

// Punto 5

/* let persona1 = {
    nombre: "Andres",
    edad: 23,
    altura: 175
}

let persona2 = {
    nombre: "stefania",
    edad: 27,
    altura: 172
}

if (persona1.altura > persona2.altura) {
    console.log( persona1.nombre + " es la persona mas alta. ")
}else {
    console.log(persona2.nombre + "es la persona mas alta")
}

if (persona1.edad > persona2.edad) {
    console.log( persona1.nombre + " es la persona mas vieja. ")
}else {
    console.log(persona2.nombre + "es la persona mas vieja")
} */
//PUNTO 6

/* const edad = prompt("Ingrese su edad")
const altura = prompt("Altura");
const vision = prompt("vision del 1 al 10")

if (edad >= 18 && altura > 150 && vision >= 8) {
    console.log("Estás capacitado para conducir.")
} else {
    console.log("No cumples con los requisitos para conducir.")
} */

//PUNTO 7

/* const nombre = prompt("Ingresa tu nombre:")
const pase = prompt("¿Tienes un pase (vip o normal)?")
const tieneEntrada = prompt("¿Tienes una entrada? (responde con 'si' o 'no')")


if (nombre.toLowerCase() === "Andres" || pase.toLowerCase() === "vip") {
  console.log("¡Bienvenido!")

  if (tieneEntrada === "si") {
    console.log("También puedes utilizar tu entrada.")
  }
} else {

  const deseaComprar = prompt("¿Deseas comprar una entrada? (responde con 'si' o 'no')")

  if (deseaComprar === "si") {
    const dineroDisponible = parseFloat(prompt("Ingresa tu saldo disponible:"))

    if (dineroDisponible >= 1000) {
      console.log("Venta de entrada exitosa. ¡Bienvenido!")
    } else {
      console.log("Venta de entrada rechazada.")
    }
  } else {
    console.log("Gracias por tu visita. ¡Hasta luego!")
  }
} */


// Punto 8
/* 
let numeroIncognita = Math.floor(Math.random() * 10) + 1
let intentos = 3

while (intentos > 0) {
  let numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 10):"))

  if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 10) {
    alert("Por favor, ingresa un número válido entre 1 y 10.")
    continue
  }

  if (numeroIngresado === numeroIncognita) {
    alert("¡Ganaste! Has adivinado el número.")
    break
  } else if (numeroIngresado < numeroIncognita) {
    alert("El número a adivinar es mayor.")
  } else {
    alert("El número a adivinar es menor.")
  }

  intentos--
}

if (intentos === 0) {
  alert("Se te agotaron los intentos. El número era " + numeroIncognita + ". ¡Mejor suerte la próxima vez!")
}
 */

//Punto 9

/* const edad = parseInt(prompt("Ingresa tu edad:"))

if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido para la edad.")
} else {
    if (edad >= 0 && edad <= 12) {
        alert("Eres un infante.")
    } else if (edad >= 13 && edad <= 18) {
        alert("Eres un adolescente.");
    } else if (edad >= 19 && edad <= 45) {
        alert("Eres un mayor joven.")
    } else if (edad > 45) {
        alert("Eres un anciano.")
    } else {
        if (edad > 100) {
            const confirmacion = confirm("¿En realidad tienes más de 100 años?")
            if (confirmacion) {
                alert("Eres un anciano.");
            } else {
                alert("La edad ingresada no es válida.")
            }
        } else {
            alert("La edad ingresada no es válida.")
        }
    }
}
 */

// Punto 10

/* let jugador1 = prompt("Jugador 1, elige: PIEDRA, PAPEL o TIJERAS").toUpperCase()
let jugador2 = prompt("Jugador 2, elige: PIEDRA, PAPEL o TIJERAS").toUpperCase()

if ((jugador1 === "PIEDRA" || jugador1 === "PAPEL" || jugador1 === "TIJERAS") &&
    (jugador2 === "PIEDRA" || jugador2 === "PAPEL" || jugador2 === "TIJERAS")) {
    if (jugador1 === jugador2) {
        console.log("¡Es un empate!")
    } else if (
        (jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
        (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
        (jugador1 === "TIJERAS" && jugador2 === "PAPEL")
    ) {
        console.log("Jugador 1 gana.")
    } else {
        console.log("Jugador 2 gana.")
    }
} else {
    console.log("Uno de los jugadores ha hecho trampa. Por favor, elige entre PIEDRA, PAPEL o TIJERAS.")
} */

// Punto 11

/* let color = prompt("Ingresa un color:").toUpperCase()

switch (color) {
    case "BLANCO":
    case "NEGRO":
        console.log("Falta de color.")
        break

    case "VERDE":
        console.log("El color de la naturaleza.")
        break

    case "AZUL":
        console.log("El color del agua.")
        break

    case "AMARILLO":
        console.log("El color del sol.")
        break

    case "ROJO":
        console.log("El color del fuego.")
        break

    case "CAFE":
        console.log("El color de la tierra.")
        break

    default:
        console.log("Excelente elección, no lo teníamos pensado.")
}
 */

//Punto 12

/* let numero1 = parseFloat(prompt("Ingresa el primer número:"))
let numero2 = parseFloat(prompt("Ingresa el segundo número:"))
let operacion = prompt("Ingresa la operación a realizar (+, -, *, /):")

let resultado;

switch (operacion) {
    case "+":
        resultado = numero1 + numero2
        console.log(`Resultado de la suma: ${resultado}`)
        break;

    case "-":
        resultado = numero1 - numero2
        console.log(`Resultado de la resta: ${resultado}`)
        break

    case "*":
        resultado = numero1 * numero2
        console.log(`Resultado de la multiplicación: ${resultado}`)
        break;

    case "/":
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
            console.log(`Resultado de la división: ${resultado}`)
        } else {
            console.log("ERROR: No se puede dividir por 0.");
        }
        break

    default:
        console.log("Operación no válida. Ingresa +, -, *, o /.")
} */

//Punto 13

/* const dni = {
    numero: "",
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    direccion: "",
};

console.log("Por favor, ingresa los datos de tu DNI:")

dni.numero = prompt("Número de DNI:")
dni.nombre = prompt("Nombre:")
dni.apellidos = prompt("Apellidos:")
dni.fechaNacimiento = prompt("Fecha de nacimiento (M/D/AAAA):")
dni.direccion = prompt("Dirección:")

console.log("Datos ingresados:")
console.table(dni)

const confirmacion = confirm("¿Son estos datos correctos?")

if (confirmacion) {
    console.log("Registro exitoso.")
    console.table(dni);
} else {
    console.log("Vuelva a intentarlo en 1 mes.")
} */

