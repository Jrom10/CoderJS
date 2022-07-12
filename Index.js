
const corcel = {nombre: "Corcel Celestial", valor: 150, tipo: "Montura"}
const dragon = {nombre: "Dragon Alanegra", valor: 250, tipo: "Montura"}
const atracacielos = {nombre: "Atracacielos", valor: 350, tipo: "Montura"}

const monturas = [corcel,dragon,atracacielos]

const felino = {nombre: "Crepusculin", valor: 50, tipo: "Mascota"}
const can = {nombre: "Can de Trasiego", valor: 45, tipo: "Mascota"}
const tortu = {nombre: "Tortusiu", valor: 60, tipo: "Mascota"}

const mascotas = [felino,can,tortu]

const productos = mascotas.concat(monturas)

const nuevaMontura = []
const nuevaMascota = []
const nuevoServicio =[]

let formulario
let inputNombre
let inputValor
let inputTipo
let tablaMonturas
let tablaMascotas
let tablaServicio

class Producto {
    constructor(nombre, valor, tipo) {
        this.nombre = nombre
        this.valor = valor
        this.tipo = tipo
    }
}

function inicializarElementos() {
formulario = document.getElementById("formulario")
inputNombre = document.getElementById("inputNombre")
inputValor = document.getElementById("inputValor")
inputTipo = document.getElementById("inputTipo")
tablaMonturas = document.getElementById("tablaMonturas")
tablaMascotas = document.getElementById("tablaMascotas")
tablaServicio = document.getElementById("tablaServicio")
}

function inicializarEventos(){
formulario.onsubmit = (event) => validarFormulario(event);
}

function validarFormulario(event) {
    event.preventDefault()
    let nombre = inputNombre.value
    let valor = parseFloat(inputValor.value)
    let tipo = inputTipo.value
    let nuevoProducto = new Producto (nombre, valor, tipo)

    if (tipo==="Montura"){
        nuevaMontura.push(nuevoProducto)
        formulario.reset()
        limpiarTablaMonturas()
        agregarProductosMontura()
    }
    else if (tipo==="Mascota") {
        nuevaMascota.push(nuevoProducto)
        formulario.reset()
        limpiarTablaMascotas()
        agregarProductosMascota()
    }
    else{
        nuevoServicio.push(nuevoProducto)
        formulario.reset()
        limpiarTablaServicio()
        agregarProductosServicio()
    }
}


function agregarProductosMontura() {
    for (const item of nuevaMontura) {
        let itemListaMontura = document.createElement("tr")
        itemListaMontura.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.valor}</td>
            <td>${item.tipo}</td>`
        tablaMonturas.tBodies[0].append(itemListaMontura)
    }
}

function agregarProductosMascota() {
    for (const item of nuevaMascota) {
        let itemListaMascota = document.createElement("tr")
        itemListaMascota.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.valor}</td>
            <td>${item.tipo}</td>`
        tablaMascotas.tBodies[0].append(itemListaMascota)
        }
}

function agregarProductosServicio() {
    for (const item of nuevoServicio) {
        let itemListaServicio = document.createElement("tr")
        itemListaServicio.innerHTML = `
            <td>${item.nombre}</td>
            <td>$${item.valor}</td>
            <td>${item.tipo}</td>`
        tablaServicio.tBodies[0].append(itemListaServicio)
        }
}

function limpiarTablaMonturas() {
    while (tablaMonturas.rows.length > 1) {
        tablaMonturas.deleteRow(1)
    }
}

function limpiarTablaMascotas() {
    while (tablaMascotas.rows.length > 1) {
        tablaMascotas.deleteRow(1)
    }
}

function limpiarTablaServicio() {
    while (tablaServicio.rows.length > 1) {
        tablaServicio.deleteRow(1)
    }
}

function main() {
    inicializarElementos()
    inicializarEventos()
    agregarProductos()
}

main();



let listaMascotas = document.getElementById(masco)
for (const item of mascotas) {
    let itemLista = document.createElement("li")
    itemLista.innerHTML = `<b>Producto:</b> ${item.nombre}  -  <b>Valor:</b> $${item.valor}  -  <b>Tipo:</b> ${item.tipo}`
    masco.appendChild(itemLista)
}

let listaMonturas = document.getElementById(montu)
for (const item of monturas) {
    let itemLista = document.createElement("li")
    itemLista.innerHTML = `<b>Producto:</b> ${item.nombre}  -  <b>Valor:</b> $${item.valor}  -  <b>Tipo:</b> ${item.tipo}`
    montu.appendChild(itemLista)
}

for (const item of mascotas) {
    let itemLista = document.createElement("li")
    itemLista.innerHTML = `<b>Producto:</b> ${item.nombre}  -  <b>Valor:</b> $${item.valor}  -  <b>Tipo:</b> ${item.tipo}`
    masco.appendChild(itemLista)
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
    ESC
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
            ESC
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
            alert("Se ha aplicado un descuento del 20%")
            totalProductos = efectivo

        }if (metodoPago === 2) {
            totalProductos = transferencia

        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 20%")
            totalProductos = credito

        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")            
        }
}

function reinicioCarrito() {
    alert("Se eliminaron los productos")
    totalProductos = multiplicacion(totalProductos, 0)
    carrito = []
}
