/*Ejercicio Integrador 2: Sistema de Inventario

Enunciado: Crea un sistema de inventario para una tienda con clase base Producto y clases hijas
ProductoElectronico y ProductoAlimenticio. Incluye métodos para agregar productos, buscar por categoría, y
calcular valor total. */


// Producto.js
class Producto {
constructor(nombre, precio, cantidad) {
this.nombre = nombre;
this.precio = precio;
this.cantidad = cantidad;
}

valorTotal() {
return this.precio * this.cantidad;
}

static categoriaBase() {
return "General";
}
}

class ProductoElectronico extends Producto {
constructor(nombre, precio, cantidad, garantia) {
super(nombre, precio, cantidad);
this.garantiaMeses = garantia;
this.categoria = "Electrónico";
}
}

class ProductoAlimenticio extends Producto {
constructor(nombre, precio, cantidad, fecha) {
super(nombre, precio, cantidad);
this.fechaVencimiento = fecha;
this.categoria = "Alimenticio";
}
}

class Inventario {
constructor() {
this.productos = [];
}

agregar(producto) {
this.productos.push(producto);
}

buscarPorCategoria(categoria) {
return this.productos.filter(
p => p.categoria === categoria
);
}
}