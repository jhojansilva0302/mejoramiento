/*Ejercicio 15: Arrow Functions

Enunciado: Escribe una Arrow Function llamada areaTriangulo que reciba base y altura. Debe retornar el área
(Base × Altura ÷ 2).*/

const areaTriangulo = (base, altura)=>
{
return (base * altura) / 2;
};
const areaTrianguloCorto = (base,altura) =>
(base * altura) / 2;
console.log("Área:",
areaTriangulo(10, 5));