// a. Corrige el siguiente código para que siga las buenas prácticas de JavaScript
// moderno (usa let y const en lugar de var) y asegúrate de que las variables no se
// puedan reasignar si no es necesario.

// var nombre = "Armando" ;
// var edad = 25;
// nombre = "Ana Maria";
// var saludo = "Hola," + nombre +". Tienes" + edad + " años.";
// //muestra en consola en contenido de saludo


let nombre = "Armando";
const edad = 25;
nombre = "Ana Maria";
const saludo = "Hola, " + nombre + ". Tienes " + edad + " años.";
console.log(saludo); // muestra en consola el contenido de saludo
