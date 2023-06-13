//Pre Entrega 1 Pablo Messa
let mtbSpecialized = 3000
let mtbMerida = 3850
let mtbScott = 3600
let rutaSpecialized = 3850
let rutaMerida = 3850
let rutaScott = 2900

let itemSeleccionado = parseInt(prompt(`Seleccione una opción
1-Bicicleta MTB
2-Bicicleta RUTA
3-Salir del menú`))

function enviaremos(){
    console.log(`Le enviaremos a su mail la mejor oferta para que pueda acceder a su nueva bici!!!`)
}
switch(itemSeleccionado){
    case 1:
    console.log(`Usted ha seleccionado Bicicletas MTB`)
    let mtb= prompt(`seleccione la marca de su bicicleta MTB:
    1- Specialized
    2- Merida
    3- Scott`)
    if(mtb == 1){
       enviaremos( alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + mtbSpecialized / 12))
    }else if(mtb == 2){
        enviaremos( alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + mtbMerida / 12))
    }else if(mtb == 3){
        enviaremos( alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + mtbScott / 12))
    }
    break
    case 2:
    console.log(`Usted ha seleccionado Bicicletas RUTA`)
    let ruta= prompt(`seleccione la marca de su bici de RUTA:
    1- Specialized
    2- Merida
    3- Scott`)
    if(ruta == 1){
        enviaremos( alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + rutaSpecialized / 12))
     }else if(ruta == 2){
        enviaremos( alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + rutaMerida / 12))
     }else if(ruta == 3){
        enviaremos( alert(`Enviaremos su Specialized MTB en solo 12 cuoatas de  de U$D` + rutaScott / 12))
     }
    break
    default:
    console.log(`La opcion no es correcta, Gracias por utilizar nuestra app, presine F5 para volver a ver el menú`)
    break

}

