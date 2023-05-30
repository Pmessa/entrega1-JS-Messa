//Primera Entrega Pablo Messa

//En la entrega final del curso de desarrollo web realice una página a la que debería darle funcionalidad

//La idea es que los usuarios puedan elegir y agregar al carrito(que todavía no existe), los productos disponibles que tampoco existen aún.

//El proyecto está en mi repositorio de Github.
//https://github.com/Pmessa/entrega-final-pablo-messa.git


let seccion = prompt("Bienvenido a nuesta plataforma de compras, ingrese la sección en que desea comprar 1- para asesorías y 2- para cursos")

switch (seccion) {
    case "1":
        console.log("Usted se encuentra en la sección ASESORÍAS")
        alert("Usted se encuentra en la sección ASESORÍAS presione la tecla Enter para seleccionar la asesoría de su interés")
        break;
    case "2":
        console.log("Usted se encuentra en la sección Cursos")
        alert("Usted se encuentra en la sección Cursos presione la tecla Enter para seleccionar el curso de su interés")
        break;
    default:
        prompt("El valor ingresado no es correcto por favor ingrese 1- para asesorías y 2- para cursos")

}

if (seccion) {
    console.log("Usted se encuentra en la sección Cursos")
    alert("Usted se encuentra en la sección Cursos presione la tecla Enter para seleccionar el curso de su interés")
} else {
    alert("El valor ingresado no es correcto")
}