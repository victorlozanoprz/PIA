/* App1 */

/* Obtener las referencias de los elementos a programar */
const app1Num1 = document.getElementById("app1Num1");
const app1Num2 = document.getElementById("app1Num2");
const app1Res = document.getElementById("app1Res");

const app1BtnCalcular = document.getElementById("app1BtnCalcular");

app1BtnCalcular.addEventListener("click", (e) => {  /* addEventListener es para que, al presionar el boton Btn, se ejecute el evento después del () => */
    e.preventDefault(); /* para prevenir que recargue el servidor, que no se borren los datos en las cajas*/

    let num1 = parseInt(app1Num1.value);  /* toma el valor (value) de la caja app1Num1 */
    let num2 = parseInt(app1Num2.value); /* parseInt convierte el dato a tipo númerico */
    let suma = num1 + num2;

    app1Res.value = suma;
});

/* App2 */
const app2Texto = document.getElementById("app2Texto");
const app2Veces = document.getElementById("app2Veces");
const app2Res = document.getElementById("app2Res");
const app2BtnRepetir = document.getElementById("app2BtnRepetir");

app2BtnRepetir.addEventListener("click", (e) => {
    e.preventDefault();

    let texto = app2Texto.value;
    let veces = parseInt(app2Veces.value);
    let resultado = texto.repeat(veces);    /* repeat para que repita las n veces especificadas entre ( ) */

    app2Res.value = resultado;
});

/* EJEMPLO DEL FOR
for(let cont=1 ; cont <=10 ; cont++){ /* inicialización, condición ("mientras se cumpla esta condición"), contador* /
    console.log("Numero",cont);                /* los signos de (++) que están en cont++ determinan que el contador
                                          aumentará de 1 en 1 * /
} */

/* App 3 */
const app3Num1 = document.getElementById("app3Num1"); /* toma el elemento con ese id y hace una constante con él */
const app3Num2 = document.getElementById("app3Num2");
const app3Operacion = document.getElementById("app3Operacion");
const app3Res = document.getElementById("app3Res");
const app3BtnCalcular = document.getElementById("app3BtnCalcular");

app3BtnCalcular.addEventListener("click", (e) => {
    e.preventDefault();

    let n1 = parseInt(app3Num1.value);
    let n2 = parseInt(app3Num2.value);
    let operacion = app3Operacion.value; /* toma el valor escogido en la lista de opciones (el select del html) */
    let resultado;

    /* checar qué operación escogió el usuario */
    /* if( operacion == "s" ){ /* operador de comparación es == (doble signo de igual) * /
        resultado = n1 + n2;
    }
    else if( operacion == "r"){
        resultado = n1 - n2;
    }
    else if( operacion == "m"){
        resultado = n1 * n2;
    }
    else if( operacion == "d"){
        resultado = n1 / n2;
    } */


    /* switch es como el Según de PseInt, hace lo mismo que la solución con else if, pero más corto y legible */
    switch (operacion){
        case "s": resultado = n1 + n2;
                  break;
        case "r": resultado = n1 - n2;
                  break;
        case "m": resultado = n1 * n2;
                  break;
        case "d": resultado = n1 / n2;
                  break;
    }

    app3Res.value = resultado;
})

/* App 4 */
const app4Tabla = document.getElementById("app4Tabla");
const app4Inv = document.getElementById("app4Inv");
const app4SoloPunto = document.getElementById("app4SoloPunto");
const app4Res = document.getElementById("app4Res");
const app4BtnVer = document.getElementById("app4BtnVer");

function mostrarTabla(){
    let tabla = parseInt(app4Tabla.value);
    let lista = document.createElement("ul");

    if(!app4Inv.checked){ /* checked verifica si el objeto está checado, ! es el operador para decir "not" */
        for(let i=1 ; i<=10 ; i++){

            let resMult = app4SoloPunto.checked ? ".".repeat(tabla * i) : tabla * 1;
            /* el signo ? equivale a un "if", el bloque del if sería lo escrito después del ?, el bloque del else se escribe después del signo : . En este caso se crea la variable "resMult" al mismo tiempo que se define su valor, el cual es un if */

            /* MISMO RESULTADO PERO CON DISTINTO PROCEDIMIENTO:
            let resMult;

            if(app4SoloPunto.checked){
                resMult = ".".repeat(tabla * i);
            }
            else{
                resMult = tabla * i;
            } */

            let mult = tabla + " X " + i + " = " + resMult;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item); /* para agregar un elemento a la lista guardada en la variable "lista" */
        }
    }
    else{
        for(let i=10 ; i>=1 ; i--){ /* los signos -- para que se reste de 1 en 1 */
            let mult = tabla + " X " + i + " = " + tabla*i;
            let item = document.createElement("li");
            item.innerHTML = mult;
            lista.appendChild(item); /* para agregar un elemento a la lista guardada en la variable "lista" */
        }
    }

    app4Res.innerHTML = ""; /* para eliminar lo que haya en app4Res y que no se agrupe la info */
    app4Res.appendChild(lista); /* agrega la lista terminada como hija del contenedor con id "app4Res" */
};

app4BtnVer.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarTabla();
});

app4Inv.addEventListener("change", (e) => {
    mostrarTabla();
});

/* App 5 */
const app5Borde = document.getElementById("app5Borde");
const app5Color = document.getElementById("app5Color");
const app5Grosor = document.getElementById("app5Grosor");
const app5Tipo = document.getElementById("app5Tipo");
const app5BtnAplicar = document.getElementById("app5BtnAplicar");
const app5Div = document.getElementById("Test");

function AplicarBorde(){
    /* variables para guardar la opción introducida por el usuario */
    let opcionBorde = app5Borde.value;
    let color = app5Color.value;
    let grosor = parseInt(app5Grosor.value) + "px ";
    let opcionTipo = app5Tipo.value;

    /* variable para el tipo de borde */
    let tipoCSS;

    /* para cambiar la variable tipoCSS dependiendo de la opción escogida */
    switch (opcionTipo){
        case "v": tipoCSS = "solid";
                  break;
        case "w": tipoCSS = "dotted";
                  break;
        case "x": tipoCSS = "groove";
                  break;
        case "y": tipoCSS = "dashed";
                  break;
        case "z": tipoCSS = "double";
                  break;
    };

    /* para cambiar el borde de cierto lado del div dependiendo de la opción escogido, ya aplicando los valores de color, grosor y tipo */
    switch (opcionBorde){
        case "a": app5Div.style.setProperty("border", `${color} ${grosor} ${tipoCSS}`);
                  break;
        case "b": app5Div.style.setProperty("border-top", `${color} ${grosor} ${tipoCSS}`);
                  break;
        case "c": app5Div.style.setProperty("border-bottom", `${color} ${grosor} ${tipoCSS}`);
                  break;
        case "d": app5Div.style.setProperty("border-left", `${color} ${grosor} ${tipoCSS}`);
                  break;
        case "e": app5Div.style.setProperty("border-right", `${color} ${grosor} ${tipoCSS}`);
                  break;
    };
}

app5BtnAplicar.addEventListener("click", (e) => {
    e.preventDefault();
    AplicarBorde();
})

/* App 6 */
function perfecto(numero){
    let divisor = 1
    let suma = 0;
    do{
        if(numero % divisor == 0) { /* el % es para regresar el residuo de la división */
            suma += divisor;
        }
        divisor++;
    }while(divisor < numero);
    return numero == suma;
};

const app6Ini = document.getElementById("app6Ini");
const app6Fin = document.getElementById("app6Fin");
const app6Res = document.getElementById("app6Res");
const app6BtnVer = document.getElementById("app6BtnVer");
const lista = document.createElement("ol");

app6BtnVer.addEventListener("click", (e) => {
    e.preventDefault();  /* para botones de tipo submit */

    let ini = parseInt(app6Ini.value);
    let fin = parseInt(app6Fin.value);

    /* if block for switching the values in case the first is greater than the second */
    if(ini > fin){
        let aux = ini   /* aux variable to temporarily saving a value and not losing it when manipulating it*/
        ini = fin
        fin = aux
    }
    else {
        
    }

    /* this if block does the same thing but with a different method, it re-asigns the values taken directly from the objects considering that the first is greater than the second */
    /* if (ini > fin){
        ini = parseInt(app6Fin.value);
        fin = parseInt(app6Ini.value);
    } */

    let numero = ini;
    while(numero <= fin){

        /* checar si es perfecto */
        if(perfecto(numero)){
            let item = document.createElement("li");
            item.innerHTML = numero;
            lista.appendChild(item);
        };

        numero++;
    }
    app6Res.innerHTML = "";
    app6Res.appendChild(lista);
});

/* App 7 */
const app7Id = document.getElementById("app7Id");
const app7Nombre = document.getElementById("app7Nombre");
const app7Altura = document.getElementById("app7Altura");
const app7Peso = document.getElementById("app7Peso");
const app7Imagen = document.getElementById("app7Imagen");
const app7BtnBuscar = document.getElementById("app7BtnBuscar");

app7BtnBuscar.addEventListener("click", e => {
    e.preventDefault();
    let id = app7Id.value;
    let url = "https://pokeapi.co/api/v2/pokemon/" +  id; /* para concatenar el id al link */

    fetch(url)
        .then(response => response.json())   /* use this => to do this */
        .then(data => mostrarDatos(data)); /* los datos del pokemon se guardan en data */
});

function mostrarDatos(data){
    app7Nombre.innerHTML = "Nombre: " + data.name;
    app7Altura.innerHTML = "Altura: " + data.height;
    app7Peso.innerHTML = "Peso: " + data.weight;
    app7Imagen.src = data.sprites.other.home.front_default; /* el método src de app7Imagen es para añadirle un valor al atributo src de la etiequeta img en el HTML */
};