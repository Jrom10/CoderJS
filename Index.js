const corcel = {nombre: "Corcel Celestial", valor: 150}
const dragon = {nombre: "Dragon Alanegra", valor: 250}
const atracacielos = {nombre: "Atracacielos", valor: 350}

const monturas = [corcel,dragon,atracacielos]

const felino = {nombre: "Crepusculin", valor: 50}
const can = {nombre: "Can de Trasiego", valor: 45}
const tortu = {nombre: "Tortusiu", valor: 60}

const mascotas = [felino,can,tortu]

const productos = mascotas.concat(monturas)

const productosPromo = productos.map ((el) => {
    return {
        nombre: el.nombre,
        valor: Math.round(el.valor / 1.5)
    }}
)

function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}

function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}

let valorFaccion = 300
let totalProductos = 0
let carrito = []

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
        }
        else {
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

function menuUser(){
    let opcion = 0;
    
    do{
        opcion = parseInt(prompt(`Bienvenido ${nombre}\nSeleccione una opcion para continuar. (ESC para salir)\n1-Comprar\n2-Pagar\n3-Eliminar compras`))
    
    switch (opcion) {
        case 1:
            agregarProducto()
            menuUser()
        case 2:
            metodoPago()
            mostrarTotal(totalProductos)
        case 3:
            reinicioCarrito()
            menuUser()
        default: 
            alert("seleccione una opcion valida")
            
        } 
    } while (opcion !== "") 
}

function agregarProducto() {
    let seleccionarProducto = 0
    do {
        seleccionarProducto = parseInt(prompt(`Seleccione el producto que desea agregar al carrito.\n su total hasta ahora es $${totalProductos}\n1-Monturas\n2-Mascotas\n3-Cambio de Faccion\n0-Finallizar Compra`))

        if (seleccionarProducto === 1) {
            agregarMontura()
        }
        if (seleccionarProducto === 2) {
            agregarMascota()
        }
        if (seleccionarProducto === 3) {
            totalProductos = suma(totalProductos, valorFaccion)
            carrito.push
            alert ("producto añadido")
        }
        if (seleccionarProducto >= 4) {
            alert("Seleccione una opcion valida")
        }

    }while (seleccionarProducto !== 0)

}


function agregarMontura() {
    let seleccionarMontura = 0
    do {
        seleccionarMontura = parseInt(prompt(`Seleccione montura.\n1-Corcel Celestial\n2-dragon Alanegra\n3-Atracacielos\n0-Finallizar Compra / Volver al menu anterior`))

        if (seleccionarMontura === 1) {
            totalProductos = suma(totalProductos, corcel.valor)
            carrito.push
            alert ("producto añadido")
        }if (seleccionarMontura === 2) {
            totalProductos = suma(totalProductos, dragon.valor)
            carrito.push
            alert ("producto añadido")
        }if (seleccionarMontura === 3) {
            totalProductos = suma(totalProductos, atracacielos.valor)
            carrito.push
            alert ("producto añadido")
        }if (seleccionarMontura >= 4) {
            alert("Seleccione una opcion valida")
        }

    }while (seleccionarMontura !== 0)

}

function agregarMascota() {
    let seleccionarMascota = 0
    do {
        seleccionarMascota = parseInt(prompt(`Seleccione montura.\n1-Crepusculin\n2-Can de Trasiego\n3-Tortusiu\n0-Finallizar Compra / Volver al menu anterior`))

        if (seleccionarMascota === 1) {
            totalProductos = suma(totalProductos, felino.valor)
            carrito.push
            alert ("producto añadido")
        }if (seleccionarMascota === 2) {
            totalProductos = suma(totalProductos, can.valor)
            carrito.push
            alert ("producto añadido")
        }if (seleccionarMascota === 3) {
            totalProductos = suma(totalProductos, tortu.valor)
            carrito.push
            alert ("producto añadido")
        }if (seleccionarMascota >= 4) {
            alert("Seleccione opcion valida")
        }

    }while (seleccionarMascota !== 0)

}


function mostrarTotal(resultado) {
    alert(`El total a pagar es: $${resultado}\n Gracias por su compra`)
    
}

function metodoPago() {
    let transferencia = totalProductos
    let efectivo = totalProductos * 0.8
    let credito = totalProductos * 1.2
    let metodoPago = 0

        metodoPago = parseInt(prompt(`El total en el carrito es de: $${totalProductos} \nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito`))
        if (metodoPago === 1) {
            alert("Se ha aplicado un descuento del 20%");
            totalProductos = efectivo;

        }if (metodoPago === 2) {
            totalProductos = transferencia;

        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 20%");
            totalProductos = credito;

        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}

function reinicioCarrito() {
    alert("Se eliminaron los productos")
    totalProductos = multiplicacion(totalProductos, 0);
    carrito = []
}
