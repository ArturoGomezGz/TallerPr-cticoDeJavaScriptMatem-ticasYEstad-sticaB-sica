const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado
});

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

const perimeroTriangulo = baseTriangulo + ladoTriangulo1 + ladoTriangulo2;
const areaTrangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    baseTriangulo,
    alturaTriangulo,
    perimeroTriangulo,
    areaTrangulo,
});

function calcularTriangulo(b, l1, l2, h){
    return {
        perimetro: l1 + l2 + b,
        area: (b * h) / 2,
    }
}

function calcularCuadrado(l){
    return{
        perimetro: l * 4,
        area: l * l,
    }
}