//Pre Entrega 1 Pablo Messa
let mtbSpecialized = 3000
let mtbMerida = 3850
let mtbScott = 3600
let rutaSpecialized = 3450
let rutaMerida = 3850
let rutaScott = 2900

let itemSeleccionado = parseInt(prompt(`Seleccione una opción
1-Bicicleta MTB
2-Bicicleta RUTA
3-Salir del menú`))

function pago() {
    formaDePago = parseInt(prompt(`Seleccione la forma de Pago
    1 - Transferencia Bancaria con un 10% de descuento
    2 - 12 Cuotas sin interés con Crédito VISA`))
}
switch (itemSeleccionado) {
    case 1:
        console.log(`Usted ha seleccionado Bicicletas MTB`)
        let mtb = parseInt(prompt(`seleccione la marca de su bicicleta MTB:
    1- Specialized U$D 3.000-
    2- Merida U$D 3.850-
    3- Scott U$D 3.600-`))
        if (mtb == 1) {
            pago()
            if (formaDePago == 1) {
                alert(`Enviaremos su Specialized MTB cuando recibamos el depósito de U$D ` + mtbSpecialized * .9)
            } else if (formaDePago == 2) {
                alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + mtbSpecialized / 12)
            } else if (formaDePago >= 3 || isNaN) {
                alert(`La opción ` + formaDePago + ` ingresada, no es una opción válida`)
            }
        } else if (mtb == 2) {
            pago()
            if (formaDePago == 1) {
                alert(`Enviaremos su Merida MTB cuando recibamos el depósito de U$D ` + mtbMerida * .9)
            } else if (formaDePago == 2) {
                alert(`Enviaremos su Merida MTB en solo 12 cuoatas de  de U$D` + mtbMerida / 12)
            } else if (formaDePago >= 3 || isNaN) {
                alert(`La opción ` + formaDePago + ` ingresada, no es una opción válida`)
            }
        } else if (mtb == 3) {
            pago()
            if (formaDePago == 1) {
                alert(`Enviaremos su Scott MTB cuando recibamos el depósito de U$D ` + mtbScott * .9)
            } else if (formaDePago == 2) {
                alert(`Enviaremos su Scott MTB en solo 12 cuoatas de  de U$D` + mtbScott / 12)
            } else if (formaDePago >= 3 || isNaN) {
                alert(`LSa opción ` + formaDePago + ` ingresada, no es una opción válida`)
            }
        }
        alert(`Gracias por su compra ☺`)
        break

    case 2:
        console.log(`Usted ha seleccionado Bicicletas RUTA`)
        let ruta = prompt(`seleccione la marca de su bici de RUTA:
    1- Specialized U$D 3.450-
    2- Merida U$D 3.850-
    3- Scott U$D 2.900-`)
        if (ruta == 1) {
            pago()
            if (formaDePago == 1) {
                alert(`Enviaremos su Specialized RUTA cuando recibamos el depósito de U$D ` + rutaSpecialized * .9)
            } else if (formaDePago == 2) {
                alert(`Enviaremos su Specialized RUTA en solo 12 cuoatas de  de U$D` + rutaSpecialized / 12)
            } else if (formaDePago >= 3 || isNaN) {
                alert(`la opción ` + formaDePago + ` ingresada, no es una opción válida`)
            }
        } else if (ruta == 2) {
            pago()
            if (formaDePago == 1) {
                alert(`Enviaremos su Merida RUTA cuando recibamos el depósito de U$D ` + rutaMerida * .9)
            } else if (formaDePago == 2) {
                alert(`Enviaremos su Merida RUTA en solo 12 cuoatas de  de U$D` + rutaMerida / 12)

            }
        } else if (ruta == 3) {
            pago()
            if (formaDePago == 1) {
                alert(`Enviaremos su Scott RUTA cuando recibamos el depósito de U$D ` + rutaScott * .9)
            } else if (formaDePago == 2) {
                alert(`Enviaremos su Scott RUTA en solo 12 cuoatas de  de U$D` + rutaScott / 12)
            } else if (formaDePago >= 3 || isNaN) {
                alert(`la opción ` + formaDePago + ` ingresada, no es una opción válida`)
            }
        }
        alert(`Gracias por su compra ☺`)
        break
    case 3:
        alert(`Gracias por utilizar nuestro simulador de compras ☺
        para volver al menú inicial presione la tecla "F5"`)
        console.log(`Presione la tecla "F5" para volver a ver el menú`)
        break
    default:
        alert(`La opción ingresada no es correcta presione "F5" para volver al menú principal`)
        console.log(`La opcion no es correcta, Gracias por utilizar nuestra app ☺, presione la tecla "F5" para volver a ver el menú`)
        break
}


