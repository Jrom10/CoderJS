
let productosSuma = []

let formulario
let inputNombre
let inputValor
let inputTipo
let tablaCompra
let oferta
let botonAdmin
let botonAgregar
let limpiar
let terminarCompra
let total
let alertCarrito


class Producto {
    constructor(nombre, valor, tipo, id) {
        this.nombre = nombre
        this.valor = valor
        this.tipo = tipo
        this.id = generarId(id)
    }
}


async function obtenerArray() {
    const resp = await fetch('data.json')
    const data = await resp.json()
    data.forEach(datos => {
        let productoNuevo = new Producto (datos.nombre, datos.valor, datos.tipo, datos.id)
        productosSuma.push(productoNuevo)
    })
}

function generarId() {
    let id = 0
    for (let i = 0; i <= productosSuma.length+1; i++){
        id = i}
    return id
}

class Carrito {
    constructor(id) {
        this.id = id
        this.productos = []
    }

    calcularTotal() {
        let total = 0
        for(let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].valor
        }
        return total
    }
}


function inicializarElementos() {
    formulario = document.getElementById("formulario")
    inputNombre = document.getElementById("inputNombre")
    inputValor = document.getElementById("inputValor")
    inputTipo = document.getElementById("inputTipo")
    tablaCompra = document.getElementById("tablaCompra")
    oferta = document.getElementById("oferta")
    botonAgregar = document.getElementsByClassName("botonAgregar")
    botonAdmin = document.getElementById("botonAdmin")
    limpiar = document.getElementById("limpiar")
    terminarCompra = document.getElementById("terminarCompra")
    total = document.getElementById ("total")
    alertCarrito = document.getElementById ("")
}

function inicializarEventos(){
    formulario.onsubmit = (event) => validarFormulario(event)
}

function validarFormulario(event) {
    event.preventDefault()
    let nombre = inputNombre.value
    let valor = parseFloat(inputValor.value)
    let tipo = inputTipo.value
    let nuevoProducto = new Producto (nombre, valor, tipo)
    
    if (valor > 0 && nombre !== ""){
        productosSuma.push(nuevoProducto)
        alertRegistro()
        mostrarCards()
        console.log(productosSuma)
    }
    else{ 
        alertError()
    }
    formulario.reset()
    let storageLoad = actualizarCarrito()
    agregarCarrito(storageLoad)
}

function renderCard(producto) {
    let cardRendered = `    
    <div class="card m-3" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${producto.id}-${producto.nombre}</h5>
            <p class="card-text"> <b>Producto:</b> ${producto.tipo}</p>
            <p class="card-text">$ ${producto.valor}-${producto.tipo}</p>
            <a href="#" class="btn btn-primary botonAgregar" id=${producto.id}>Agregar al carrito</a>
        </div>
    </div>
    `
    return cardRendered
}

function renovarStorage (productos) {
    localStorage.clear()
    localStorage.setItem("productos", JSON.stringify(productos))
}


function mostrarCards() {
    oferta.innerHTML = ""
    productosSuma.forEach(productos => {
        oferta.innerHTML += renderCard(productos)
    })
}


function agregarCarrito (storageLoad) {
    let carrito = new Carrito(1)
    if(storageLoad !== null){
        for (const item of storageLoad.productos) {
            carrito.productos.push(item)
            limpiarCarrito()
            renderizarCarrito(carrito)
            renovarCarrito(carrito)
        }
    }

    let arrayDeBotones = Array.from(botonAgregar)
    arrayDeBotones.forEach(boton => {
        boton.addEventListener("click", (e) => {
            alertAgregar()
            let productoSeleccionado = productosSuma.find(producto => producto.id == e.target.id)
            carrito.productos.push(productoSeleccionado)
            limpiarCarrito()
            renderizarCarrito(carrito)
            renovarCarrito(carrito)
        })
    })

    limpiar.onclick = () => {LimpiarCompra(carrito)}
    terminarCompra.onclick = () => {finalizarCompra(carrito)}
}

function actualizarCarrito (){
    let storage = JSON.parse(localStorage.getItem("carrito"))
    localStorage.removeItem("carrito")
    return storage
}

function renovarCarrito(carrito) {
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
}

function limpiarCarrito() {
    tablaCompra.innerHTML = ""
}

function eliminarCarrito() {
    alertLimpiar()
    localStorage.removeItem("carrito")
    tablaCompra.innerHTML = ""
    let storageLoad = actualizarCarrito()
    agregarCarrito(storageLoad)
}

function renderizarCarrito(carrito) {
    carrito.productos.forEach(producto => {
        let filaTabla = document.createElement("tr")
        filaTabla.innerHTML = `
            <td class="text-center">${producto.nombre}</td>
            <td class="text-center">$${producto.valor}</td>
            <td class="text-center">${producto.tipo}</td>`
            tablaCompra.appendChild(filaTabla)
    })

    let filaTotal = document.createElement("tr")
    filaTotal.innerHTML = `
        <td class="text-center"><b>TOTAL</b></td>
        <td class=""></td>
        <td class="text-center m-5"><b>$${carrito.calcularTotal()}</b></td>`
    tablaCompra.appendChild(filaTotal)
}

function finalizarCompra(carrito){
    carrito.calcularTotal() !==0 ?
        alertComprar(carrito)
        : 
        total.innerHTML = `<b>Su carrito esta vacio.<b>`
}

function LimpiarCompra(carrito){
    carrito.calcularTotal() !==0 ?
        eliminarCarrito(carrito)
        : 
        total.innerHTML = `<b>Su carrito esta vacio.<b>`
}

function alertComprar(carrito) {
    Swal.fire({
        title: `Su total es de <b>$${carrito.calcularTotal()}</b>`,
        icon: 'success',
        footer: 'Usted sera redireccionado a MercadoPago',
        showCancelButton: true,
        cancelButtonText: `CANCELAR`,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'COMPRAR'
    })
    .then((result) => {
        if (result.isConfirmed) {
            let timerInterval
            Swal.fire({
                title: 'Redireccionando',
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    window.location.href = "https://www.mercadopago.com/"
                    clearInterval(timerInterval)
                }
            })
            .then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    console.log('I was closed by the timer')
                }
            })
        }
    })
}

function alertError() {
    Swal.fire({
        icon: 'error',
        title: 'Registro Fallido',
        text: 'Complete nombre y valor del producto a ingresar.',
    })
}

function alertLimpiar(){
    Swal.fire(
        'Se ha vaciado el carrito',
        '',
        'warning'
    )
}

function alertRegistro(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: false,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })
    Toast.fire({
        icon: 'success',
        title: 'Producto Registrado'
    })
}

function alertAgregar(){
    Toastify({
        text: "Producto Añadido",
        duration: 1500,
        close: false,
        gravity: "top",
        position: "left", 
        stopOnFocus: false,
        style: {
            background: "#0d6efd",
        }
    })
    .showToast()
}

async function main() {
    await obtenerArray()
    inicializarElementos()
    inicializarEventos()
}

main()

const listaPba = document.getElementById("prueba")


