/* Calculo de areas y perimetros de figuras geometricas basicas */
const PlatziMath = {};

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

/* console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
}); */

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimeroTriangulo = baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
const areaTrangulo = (baseTriangulo * alturaTriangulo) / 2;

/* console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimeroTriangulo,
    areaTrangulo,
}); */

PlatziMath.calcularTriangulo = function calcularTriangulo(b, l1, l2, h) {
    return {
        perimetro: l1 + l2 + b,
        area: (b * h) / 2,
    }
}

PlatziMath.calcularCuadrado = function calcularCuadrado(l) {
    return {
        perimetro: l * 4,
        area: l * l,
    }
}

/* console.group("circle") */

const radioCirculo = 3;
const diametroCurculo = radioCirculo * 2;
const pi = 3.1415;

const circunferenciaCirculo = diametroCurculo * pi;
const areaCirculo = (radioCirculo ** 2) * pi;

/* console.log({
    radioCirculo,
    diametroCurculo,
    pi,
    circunferenciaCirculo,
    areaCirculo,
}); */


PlatziMath.calcularCirculo = function calcularCirculo(r) {
    const d = r * 2

    return {
        circunferencia: d * Math.PI,
        area: Math.PI * Math.pow(r, 2),
    }
}


console.groupEnd("circle")

/* calculo de altura de un triangulo isoseles */

PlatziMath.calcularAlturaIsoseles = function calcularAlturaIsoseles(a, b) {
    return {
        altura: Math.sqrt((Math.pow(a, 2)) - ((Math.pow(b, 2)) / 4))
    }
}

/* calculo de altura triangulo escaleno (reto) */



/* Formula genral */

function FormulaGeneral() {

    const a = document.getElementById("fg-a");
    const b = document.getElementById("fg-b");
    const c = document.getElementById("fg-c");

    var x1 = ((-b.value) + (Math.sqrt((Math.pow(b.value, 2)) - (a.value * c.value * 4)))) / (2 * a.value);
    var x2 = ((-b.value) - (Math.sqrt((Math.pow(b.value, 2)) - (a.value * c.value * 4)))) / (2 * a.value);

    alert("x1 = " + x1 + "       " + "x2 = " + x2)
};


/* calculador de descuento (git checkout cupones)*/

function descuento() {

    const precio = document.getElementById("descuento-precio");
    const descuento = document.getElementById("descuento-porcent");

    var precioFinal = ((Number(precio.value)) * (100 - Number(descuento.value))) / (100);

    alert("Precio final = " + precioFinal)
}

/* Promedio, Mediana, Moda */


/* Promedio */

PlatziMath.calcularPromedio = function calcularPromedio(array) {
    /*     let suma = 0;
        let promedio = undefined;
        for (x of array){
            suma = suma + x;
        };
    
        promedio = suma / sumaSueldos;
    
        console.log(promedio); */

    const sumaArray = array.reduce((valorAcomulado, nuevoValor) => {
        return valorAcomulado + nuevoValor;
    });

    const promedio = sumaArray / array.length;
    console.log(promedio);
}

/* Mediana */

function verificarPar(array) {
    if (array.length % 2) {
        return false;
    } else {
        return true;
    }
}
function sacarMitad(array) {
    mitad = array.length / 2;
}
function organizarNumeros(array) {
    function compareNumbers(a, b) {
        return a - b;
    }
    sortArray = array.sort(compareNumbers);
}

PlatziMath.calcularMediana = function calcularMediana(array) {
    const arrayEsPar = verificarPar(array);
    organizarNumeros(array);
    sacarMitad(array);

    if (arrayEsPar)/* la lista ES par */ {
        const mitad1 = array[mitad];
        const mitad2 = array[mitad - 1];
        PlatziMath.calcularPromedio([mitad1, mitad2])
    } else /* la lista NO es par */ {
        const mitadImpar = Math.floor(mitad);
        PlatziMath.calcularPromedio([sortArray[mitadImpar]]);
    }
}

/* Moda */

PlatziMath.calcularModa = function calcularModa(array) {
    const arrayCount = {};

    for (let i = 0; i < array.length; i++) {
        const elemento = array[i];

        if (arrayCount[elemento]) {
            arrayCount[elemento] += 1;
        } else {
            arrayCount[elemento] = 1;
            console.log("hola");
        }
    }

    const arrayArray = Object.entries(arrayCount);

    function encontrarMayor(array) {
        let subarrayMayor = null;
        let mayorElemento = Number.NEGATIVE_INFINITY;
    
        for (let i = 0; i < array.length; i++) {
            const subarrayY = array[i];
            const elemento = subarrayY[1];
        
            if (elemento > mayorElemento) {
                mayorElemento = elemento;
                subarrayMayor = subarrayY;
            }
        }
  
        return subarrayMayor;
    }

    const mayor = encontrarMayor(arrayArray);
    console.log(mayor);
}

/* Reto Promedio ponderado */

const creditosArturo = [
    {
        nombre: "español",
        creditos: 20,
        calificacion: 10,
    },
    {
        nombre: "matematicas",
        creditos: 25,
        calificacion: 8,
    },
    {
        nombre: "computacion",
        creditos: 10,
        calificacion: 10,
    },
    {
        nombre: "historia",
        creditos: 10,
        calificacion: 7,
    }
]

PlatziMath.calcularPromedioPonderado = function calcularPromedioPonderado(array) {
    var total = 0;
    var sumaCreditos = 0;

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        total = (element.creditos)*(element.calificacion) + total;
        sumaCreditos = (element.creditos)+sumaCreditos;
    }

    const resultado = total/sumaCreditos;
    console.log(resultado);
}


/* 
    Reto: debes convertir las llaves y valores de un objeto 
    en propiedades (id y name) de un objeto dentro de un array.
*/

const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
};

const listaObj = [];

function convertir(objeto){
    const newArray = Object.entries(objeto);

    for (let i = 0; i < newArray.length; i++) {
        const element = newArray[i];
        const objeto = {
            id: element[0],
            name: element[1],
        };
        listaObj.push(objeto);
    }
    console.log(listaObj);
}
