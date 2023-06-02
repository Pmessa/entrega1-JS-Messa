//Primera Entrega Pablo Messa

//En la entrega final del curso de desarrollo web realice una página a la que debería darle funcionalidad

//La idea es que los usuarios puedan elegir y agregar al carrito(que todavía no existe), los productos disponibles que tampoco existen aún.

//El proyecto está en mi repositorio de Github.
//https://github.com/Pmessa/entrega-final-pablo-messa.git

let salirMenu = false
do {
    let entrada = parseInt(prompt(`Seleccione la opción deseada:
    1- Asesorías
    2- Cursos
    0- Salir del menú`))
    switch (entrada) {
        case 1:
            console.log(`Asesorías`)
            let asesorias = parseInt(prompt(`ingrese el ítem de su interés:
            1- Nutrición y Salud
            2- Hábitos Saludables
            3- Transisión al Veganismo`))
            switch (asesorias) {
                case 1:
                    console.log(`FELICIDADES!!! Usted ha comprado la asesoría en Nutrición y Salud`)
                    prompt(`Ingrese su email para recibir el material`)
                    break
                case 2:
                    console.log(`FELICIDADES!!! Usted ha comprado la asesoría en Hábitos Saludables`)
                    prompt(`Ingrese su email para recibir el material`)
                    break
                case 3:
                    console.log(`FELICIDADES!!! Usted ha comprado la asesoría en Transisión al Veganismo`)
                    prompt(`Ingrese su email para recibir el material`)
                    break
                default:
                    prompt(`${entrada} no es una opción válida, presione ENTER para volver al menú inicial`)
                    break;
            }
            break;
        case 2:
            console.log(`Cursos`)
            let cursos = parseInt(prompt(`ingrese el ítem de su interés:
            1- Aprendé a cocinar
            2- Recetas Saludables
            3- Bases de la Nutrición`))
            switch (cursos) {
                case 1:
                    console.log(`FELICIDADES!!! Usted ha comprado el curso de  Aprendé a cocinar`)
                    prompt(`Ingrese su email para recibir el material`)
                    break
                case 2:
                    console.log(`FELICIDADES!!! Usted ha comprado el curso de Recetas Saludables`)
                    prompt(`Ingrese su email para recibir el material`)
                    break
                case 3:
                    console.log(`FELICIDADES!!! Usted ha comprado el curso de Bases de la Nutrición`)
                    prompt(`Ingrese su email para recibir el material`)
                    break
                default:
                    prompt(`${entrada} no es una opción válida, presione ENTER para volver al menú inicial`)
                    break;
            }       
            break;
        case 0:
            salirMenu = true
            break
        default:
            prompt(`${entrada} no es una opción válida, presione ENTER para volver al menú inicial`)
            break;
    }
} while (!salirMenu) 