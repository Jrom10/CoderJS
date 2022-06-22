let opcion = prompt ("SERVICIO DE ATENCIÓN AL CLIENTE\nPor favor, seleccione una opción:\n1-Soporte técnico\n2-Ventas\n3-Facturación\nEscriba 'ESC' para terminar")

if ((opcion == 1) || (opcion == 2) || (opcion == 3)){

let nombre = prompt ("Ingrese su nombre")

    if (nombre !=""){
        while ((opcion != "ESC") && (opcion != "esc")) {
            menu()
        }

        function menu(){
            switch (opcion) {

                case "1": 
                    let user1 = prompt (`Bienvenido ${nombre}. Por favor, ingrese su n° de cliente.\n'ESC' para salir`)
                    if ((user1 != "ESC") && (user1 != "esc")) {
                        alert(`Cliente N°${user1}. Soporte Tecnico se comunicara con usted a la brevedad`)
                    }
                    else {
                        opcion = "esc"
                    }
                break

                case "2": 
                    let user2 = prompt (`Bienvenido ${nombre}. Por favor, ingrese su n° de cliente.\n'ESC' para salir`)
                    if ((user2 != "ESC") && (user2 != "esc")) {
                        alert(`Cliente N°${user2}. Sector Ventas se comunicara con usted a la brevedad`)
                    }
                    else {
                        opcion = "esc"
                    }
                break

                case "3":
                    let user3 = prompt (`Bienvenido ${nombre}. Por favor, ingrese su n° de cliente.\n'ESC' para salir`)
                    if ((user3 != "ESC") && (user3 != "esc")) {
                        alert(`Cliente N°${user3}. Sector facturaciones se comunicara con usted a la brevedad`)
                    }
                    else {
                        opcion = "esc"
                    }
                break

                default:
                    alert ("Ingrese una opcion Valida")
                    opcion = "esc"
                break
            }
        }
    }
    else {
        alert("Ingrese su nombre por favor")
    }
}
else{
    alert("Ingrese una opcion valida")
    opcion = "esc"
}