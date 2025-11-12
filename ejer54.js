// Manipulación del DOM Avanzada
const contenedorPrincipal = document.querySelector('#app');
const todosLosItems = document.querySelectorAll('.lista-items li');

console.log("Contenedor principal:", contenedorPrincipal);
console.log("Primer item de la lista:", todosLosItems[0]);

const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Este es un nuevo párrafo añadido dinámicamente.';
nuevoElemento.classList.add('mensaje-dinamico');
nuevoElemento.setAttribute('data-estado', 'activo');

if (contenedorPrincipal) {
    contenedorPrincipal.appendChild(nuevoElemento);
    console.log("Nuevo elemento añadido:", nuevoElemento);
    if (todosLosItems.length > 0) {
        todosLosItems[0].textContent = 'Primer item modificado por JS!';
        todosLosItems[0].style.color = 'blue';
        console.log("Primer item modificado.");
    }
}

 