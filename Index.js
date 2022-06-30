const corcel = {nombre: "Corcel Celestial", valor: 150}
const dragon = {nombre: "Dragon Alanegra", valor: 250}
const atracacielos = {nombre: "Atracacielos", valor: 350}

const monturas = [corcel,dragon,atracacielos]

const felino = {nombre: "Crepusculin", valor: 50}
const can = {nombre: "Can de Trasiego", valor: 45}
const tortu = {nombre: "Tortusiu", valor: 60}

const mascotas = [felino,can,tortu]

const productos = mascotas.concat(monturas)

class Producto {
    constructor(nombre, valor) {
        this.nombre = nombre
        this.valor = valor
    }
}

function nuevoProducto() {
    let numeroProductos = parseInt(prompt("Cantidad de productos a registrar"))
    let ingresados = []
    for (let index = 0; index < numeroProductos ; index++){
        let nombre = prompt ("Ingrese nombre del producto")
        let valor = prompt ("ingrese Valor del producto")
        let productoARegistrar = new Producto(
            nombre,
            valor,
        )
        ingresados.push(productoARegistrar)
    }
    return ingresados
}


let nombre = prompt ("Bienvenido a nuestra tienda. Ingrese su nombre.'Esc' para terminar")

if (nombre === "ADMIN"){
    let pass = prompt ("Ingrese contraseña")
        if (pass === "ADMIN"){
            let returnAdmin = menuAdmin()
            nombre = prompt ("Ingrese nombre de usuario")
            menuUser(returnAdmin)
        }else {
            alert("Contraseña incorrecta")
        }
}
else if (nombre !== "" && nombre !== "esc" && nombre !== "ESC") {
    menuUser()
}
else{
    alert ("Ingrese una opcion valida")
}


function menuAdmin() {
    alert("Menu para ingresar nuevos productos")
    const agregado = productos.concat(nuevoProducto())
    console.log(agregado)
    return agregado
}

function menuUser(returnAdmin){
let opcion = parseInt(prompt (`Bienvenido ${nombre}. Por favor, seleccione el item/servicio que desea adquirir:\n1-Montura\n2-Mascotas\nEscriba 'ESC' para terminar`))
switch (opcion) {

    case 1: 
        let monturaElegida = parseInt(prompt (`Seleccione la montura que desea adquirir:\n1-${monturas[0].nombre}\n2-${monturas[1].nombre}\n3-${monturas[2].nombre}`))
        switch (monturaElegida) {
            case 1:
                alert(`El monto a abonar es ${monturas[0].valor} `)
            break

            case 2:
                alert(`El monto a abonar es ${monturas[1].valor} `)
            break

            case 3:
                alert(`El monto a abonar es ${monturas[2].valor} `)
            break
        }
    break

    case 2: 
        let mascotaElegida = parseInt(prompt (`Seleccione la montura que desea adquirir:\n1-${mascotas[0].nombre}\n2-${mascotas[1].nombre}\n3-${mascotas[2].nombre}`))
        switch (mascotaElegida) {
            case 1:
                alert(`El monto a abonar es ${mascotas[0].valor} `)
            break

            case 2:
                alert(`El monto a abonar es ${mascotas[1].valor} `)
            break

            case 3:
                alert(`El monto a abonar es ${mascotas[2].valor} `)
            break
        }
    break

    default:
        alert ("Ingrese una opcion Valida")
        opcion = "esc"
    break
}
}







//para llamar dentro de un array
//console.log(listamascotas[0])

/*for (let i = 0; i<listamascotas.length; i++){
    alert (listaMascotas[i])
}*/

//console.log (listamascotas.join(", "))

//console.log (productos)