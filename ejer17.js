/*Ejercicio 17: Múltiples Condiciones

Enunciado: Crea clasificarTemperatura que reciba una temperatura en Fahrenheit. Usa if-else if-else para retornar
"Temperatura baja" si >= 14 y < 32, "Temperatura adecuada" si >= 32 y < 68, "Temperatura alta" si >= 68 y < 96, o
"Temperatura desconocida" en otro caso. */

function clasificarTemperatura(fahrenheit) {
if (fahrenheit >= 14 && fahrenheit < 32) {
return "Temperatura baja";
} else if (fahrenheit >= 32 && fahrenheit < 68) {
return "Temperatura adecuada";
} else if (fahrenheit >= 68 && fahrenheit < 96) {
return "Temperatura alta";
} else {
return "Temperatura desconocida";
}
}


console.log(clasificarTemperatura(25)); 
console.log(clasificarTemperatura(50)); 
console.log(clasificarTemperatura(85)); 