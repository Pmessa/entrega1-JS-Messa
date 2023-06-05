//Pre Entrega 1 Pablo Messa


function validarEntrada(opcion) {
    while (isNaN(opcion)) {
        opcion = parseInt(prompt("ATENCIÓN INGRESE EL VALOR NUEVAMENTE 1- MTB 2- RUTA 3- Salir del menú"))
    } return opcion
}
let mtbRoja = (100000)
let mtbVerde = (200000)
let mtbAzul = (300000)
let rutaBlanca = (120000)
let rutaGris = (250000)
let rutaNegra = (360000)

let tipoBici = prompt(`Bienvenido a nuestra sección bicicletas!
SELECCIONE LA OPCIÓN DESEADA.
1- MTB
2- RUTA
3- Salir del menú`)

while (tipoBici < 1 || tipoBici > 3) {
    alert("La opción ingresada no es válida")
    tipoBici = parseInt(prompt(`Ingrese el número de la opción deseada:
         1- MTB
         2- RUTA
         3- Salir del menú`))
}
let opcionValidada = validarEntrada(tipoBici)
if (opcionValidada == 1) {
    let mtb = parseInt(prompt(`Seleccione su bici MTB
        1-Roja $100.000-
        2-Verde $200.000-
        3-Azul $300.000-`))
    let precio
    switch (mtb) {
        case 1: alert((`Usted ha seleccionado la MTB roja de $100.000- 
            Presione "Enter" para continuar`))
            roja = parseInt(prompt(`Ingrese forma de pago
            1 - Efectivo (10% de descuento)
            2 - 12 Cuotas con Tarjeta de crédito (Precio de lista + 50%)`))
            if (roja == 1) {
                precio = alert(`El monto a abonar es de $${mtbRoja * 0.9}`)
            }
            else if (roja == 2) {
                precio = alert(`El costo de su MTB Roja es de 12 cuotas de  $${(mtbRoja * 1.5) / 12}`)
            }
            break
        case 2: alert((`Usted ha seleccionado la MTB verde de $200.000- 
            Presione "Enter" para continuar`))
            verde = parseInt(prompt(`Ingrese forma de pago
            1 - Efectivo (10% de descuento)
            2 - 12 Cuotas con Tarjeta de crédito (Precio de lista + 50%)`))
            if (verde == 1) {
                precio = alert(`El monto a abonar es de $${mtbVerde * 0.9}`)
            }
            else if (verde == 2) {
                precio = alert(`El costo de su MTB Roja es de 12 cuotas de  $${(mtbVerde * 1.5) / 12}`)
            }
            break
        case 3: alert((`Usted ha seleccionado la MTB Azul de $300.000- 
            Presione "Enter" para continuar`))
            azul = parseInt(prompt(`Ingrese forma de pago
            1 - Efectivo (10% de descuento)
            2 - 12 Cuotas con Tarjeta de crédito (Precio de lista + 50%)`))
            if (azul == 1) {
                precio = alert(`El monto a abonar es de $${mtbAzul * 0.9}`)
            }
            else if (azul == 2) {
                precio = alert(`El costo de su MTB Roja es de 12 cuotas de  $${(mtbAzul * 1.5) / 12}`)
            }
            break
    }
}
else if (opcionValidada == 2) {
    let ruta = prompt(`Seleccione su bici de RUTA
        1-Blanca $120.000-
        2-Gris $250.000-
        3-Negra $360.000-`)

    switch (ruta) {
        case 1: alert((`Usted ha seleccionado la bicicleta de ruta blanca de $120.000- 
                Presione "Enter" para continuar`))
            blanca = parseInt(prompt(`Ingrese forma de pago
                1 - Efectivo (10% de descuento)
                2 - 12 Cuotas con Tarjeta de crédito (Precio de lista + 50%)`))
            if (blanca == 1) {
                precio = alert(`El monto a abonar es de $${rutaBlanca * 0.9}`)
            }
            else if (blanca == 2) {
                precio = alert(`El costo de su MTB Roja es de 12 cuotas de  $${(rutaBlanca * 1.5) / 12}`)
            }
            break
        case 2: alert((`Usted ha seleccionado la bicicleta de ruta gris de $250.000- 
                Presione "Enter" para continuar`))
            gris = parseInt(prompt(`Ingrese forma de pago
                1 - Efectivo (10% de descuento)
                2 - 12 Cuotas con Tarjeta de crédito (Precio de lista + 50%)`))
            if (gris == 1) {
                precio = alert(`El monto a abonar es de $${rutaGris * 0.9}`)
            }
            else if (gris == 2) {
                precio = alert(`El costo de su MTB Roja es de 12 cuotas de  $${(rutaGris * 1.5) / 12}`)
            }
            break
        case 3: alert((`Usted ha seleccionado la MTB Azul de $300.000- 
                Presione "Enter" para continuar`))
            negra = parseInt(prompt(`Ingrese forma de pago
                1 - Efectivo (10% de descuento)
                2 - 12 Cuotas con Tarjeta de crédito (Precio de lista + 50%)`))
            if (negra == 1) {
                precio = alert(`El monto a abonar es de $${rutaNegra * 0.9}`)
            }
            else if (ruta == 2) {
                precio = alert(`El costo de su MTB Roja es de 12 cuotas de  $${(rutaNegra * 1.5) / 12}`)
            }
            break
    }
}

