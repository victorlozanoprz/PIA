document.write("hola a todos");     // write es una función, por lo que funciona con ( )
document.write("<marquee>Terceras</marquee>");
document.title = "Titulo desde JS;" // title es una variable, por lo que define con =

console.log("Mensaje enviado a la consola"); // se manda solo a la consola, no se imprime en el documento
console.warn("Soy un mensaje tipo warning"); // warn es para marcar el mensaje como advertencia de color amarillo al aparacer en la consola
console.error("Soy un mensaje tipo error"); // error es para marcar el mensaje como error de color rojo al aparacer en la consola
console.info("Soy un mensaje tipo info"); // info es para marcar el mensaje como info con un ícono de "i" al aparacer en la consola

alert("Hola, bienvenido a mi sitio"); // no requiere definir objeto previo (document o console) porque se trata de un método global, no propio de un objeto en particular
prompt("¿Cuántos años tienes?") //muestra un mensaje de "aceptar"


/* Variables */
let grupo;  // let se usa al definir la variable nueva
let semestre=5;
let pedidoFinalizado = true;
let estado = "Nuevo Leon";

grupo = "terceras"; // ya no se usa let al darle valor a una variable previamente hecha
semestre = 5;

document.write(`Radico en ${estado}
                y curso el ${semestre} semestre
                y mi grupo es ${grupo}`);
// con ${ } se indica que lo que está entre { } es una variable

document.write(`<article>
                    <h2>Titulo del articulo</h2>
                    <p>Texto del párrafo</p>
                </article>`);

const PORCENTAJE_COMISION = 0.1;  // const = constante, se escriben en mayúsculas

/* Acceder a un elemento de la página web para realizarle cambios */

const titulo = document.getElementById("titulo");   //guarda el elemento como constante, al elemento en sí, no incluyendo su contenido.

titulo.innerHTML ="Javascript"; // cambiar el contenido del elemento especificado
titulo.style.color = "tomato";  //del titulo, toma su propiedad "style", y de style toma su propiedad "color"
titulo.style.border = "3px solid black";    // entre " " se escribe el código CSS
titulo.style.borderRadius = "5px";

/* cambiar el titulo por uno colocado por el usuario */
const tituloNuevo = document.getElementById("titulo");
let texto = prompt("Escribe un titulo:");
tituloNuevo.innerHTML = texto;