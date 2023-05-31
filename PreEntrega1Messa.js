//Primera Entrega Pablo Messa

//En la entrega final del curso de desarrollo web realice una página a la que debería darle funcionalidad

//La idea es que los usuarios puedan elegir y agregar al carrito(que todavía no existe), los productos disponibles que tampoco existen aún.

//El proyecto está en mi repositorio de Github.
//https://github.com/Pmessa/entrega-final-pablo-messa.git

let entrada = prompt ("ingrese 1 para asesorías o 2 para Cursos ingrese 0 para salir del menú");
while (entrada !="0") {
    //Repetimos hasta que se ingresa "ESC"
        switch(entrada){
            case "1":
                console.log(`Asesorías`)
                if (entrada ==1){
                   prompt("elija una opción de asesoría")
                }
               break;
            case "2":
                console.log(`Cursos`)
                break;
            default :
                console.log(`${entrada} no es una opción válida`)
                break;
            }
            entrada = prompt("Ingrese un número válido")
}
