//Pre Entrega 1 Pablo Messa


function validarEntrada (opcion){
    while(isNaN(opcion)){
        opcion = parseInt(prompt("ATENCIÓN INGRESE EL VALOR NUEVAMENTE 1- MTB 2- RUTA 3- Salir del menú"))
        }return opcion
    }
function formaPago(pago){
    if(pago == 1){
        efectivo = (pago * 0.9)
    }else if(pago == 2){
        tarjeta = (pago * 1.1)
    
    }
    return pago   
}
let mtbRoja = (100000)
let mtbVerde = (200000)
let mtbAzul = (300000)
let rutaBlanca =(120000)
let rutaGris = (250000)
let rutaNegra = (360000)

let tipoBici = prompt(`Bienvenido a nuestra sección bicicletas!
SELECCIONE LA OPCIÓN DESEADA.
1- MTB
2- RUTA
3- Salir del menú`)

while(tipoBici < 1 || tipoBici > 3){
         alert("La opción ingresada no es válida")
         tipoBici =parseInt(prompt(`Ingrese el número de la opción deseada:
         1- MTB
         2- RUTA
         3- Salir del menú`))
}
let opcionValidada = validarEntrada(tipoBici)
    if ( opcionValidada == 1) {
        let mtb = parseInt(prompt(`Seleccione su bici MTB
        1-Roja $100.000-
        2-Verde $200.000-
        3-Azul $300.000-`))
        switch(mtb){
            case 1:alert((`Usted ha seleccionado la MTB roja de $100.000- 
            Presione "Enter" para continuar`))
            roja = parseInt(prompt(`Ingrese forma de pago
            1 - Efectivo (10% de descuento)
            2 - Tarjeta de crédito (Precio de lista)`))
            console.log(mtb)
            if (roja == 1){
               precio = prompt(`El monto a abonar es de $: 
               ${mtbRoja * 0.9}`)
            }
            else if(roja == 2){
                prompt(`Encuentre en su casilla de correo el cupón para pagar el monto de $ ``${mtbRoja}`)
            }
            break
            case "2":alert((`Usted ha seleccionado la MTB verde de $100.000- 
            Presione "Enter" para continuar`))
            verde = parseInt(prompt(`Ingrese forma de pago
            1 - Efectivo (10% de descuento)
            2 - Tarjeta de crédito (Precio de lista)`))
            break
            case "3":alert((`Usted ha seleccionado la MTB Azul de $300.000- 
            Presione "Enter" para continuar`))
            azul = parseInt(prompt(`Ingrese forma de pago
            1 - Efectivo (10% de descuento)
            2 - Tarjeta de crédito (Precio de lista)`))
            break

        }

        } 

    else if(opcionValidada == 2){
        let ruta = prompt(`Seleccione su bici de RUTA
        1-Blanca $120.000-
        2-Gris $250.000-
        3-Negra $360.000-`)  
    }
    let mtb 
    if (mtb ==1){
        alert((`Usted ha seleccionado la MTB roja de $100.000- 
        Presione "Enter" para continuar`))
        roja = parseInt(prompt(`Ingrese forma de pago
        1 - Efectivo (10% de descuento)`))
    } 
    
    

     
//     switch(mtb) {
//         case "1":100.000
//         break;
//         case "2":200.000
//         break;
//         case "3":300.000
//         break
        
//     }
//     mtb = prompt(`Seleccione su bici MTB
//     1-Roja $100.000-
//     2-Verde $200.000-
//     3-Azul $300.000-`)
//     }
//     if (opcion == 2) {
//         let ruta = prompt(`Seleccione su bici de RUTA
//     1-Blanca $120.000-
//     2-Gris $250.000-
//     3-Negra $360.000-`)
//     }
// let = roja(100.000)
// let = verde(200.000)
// let = azul(300.000)
// let = Blanca(120.000)
// let = Gris(250.000)
// let = Negra(360.000)




