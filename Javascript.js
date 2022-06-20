let opcion = prompt ("Gracias por utilizar nuestro servicio, seleccione una opción\n1-Soporte técnico\n2-Ventas\n3-Facturación\nEscriba 'ESC' para terminar")
while (opcion!="ESC"){
    switch (opcion) {
        case "1": let nombre1 = prompt ("Ingrese su n° de cliente. 'ESC' para salir")
        if (nombre1!="ESC") {
            alert(`Cliente N°${nombre1}. Soporte Tecnico se comunicara con usted`)
        }else{opcion = prompt}
        break;
        case "2": let nombre2 = prompt ("Ingrese su n° de cliente. 'ESC' para salir")
        if(nombre2!="ESC"){
            alert(`Cliente N°${nombre2}. Soporte Tecnico se comunicara con usted`)
        }else{opcion = prompt}
        break;
        case "3": let nombre3 = prompt ("Ingrese su n° de cliente. 'ESC' para salir")
        if(nombre3!="ESC"){
            alert(`Cliente N°${nombre3}. Sector facturaciones se comunicara con usted`)
        }else{opcion = prompt}
        break;
        default: alert("Ingrese una opcion Valida")
            opcion = prompt ("seleccione una opción\n1-Soporte técnico\n2-Ventas\n3-Facturación\nEscriba 'ESC' para terminar")
        break;
    }
}