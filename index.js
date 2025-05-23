"use strict";
/**
1.Crear una interfaz Product con propiedades como nombre,
precio, stock y una función para calcular el valor total.

2.Implementar un sistema de tipos para un carrito de compras con
funciones para añadir/eliminar productos y calcular el total.

3.Convertir una función JavaScript existente a
TypeScript añadiendo tipos adecuados.
*/
;
const totalAmount = (price = 0, stock = 0) => {
    return price * stock;
};
const firstItem = {
    name: "Laptop Lenovo",
    price: 300,
    stock: 5,
    initialStock: 5
};
const secondItem = {
    name: "Laptop HP",
    price: 500,
    stock: 3,
    initialStock: 3
};
const thirdItem = {
    name: "Laptop Dell",
    price: 700,
    stock: 2,
    initialStock: 2
};
let result = totalAmount(firstItem.price, firstItem.stock);
console.log(`El total de ${firstItem.name} es: $${result}`);
const addToCart = (cart, product) => {
    if (!product || product.stock <= 0)
        return 0;
    if (product.stock <= 0) {
        console.log(`No hay stock de ${product.name}`);
        return 0;
    }
    cart.products.push(product.price);
    product.stock--;
    return 1;
};
const removeFromCart = (cart, product) => {
    if (!product || product.stock < 0)
        return 0;
    const index = cart.products.indexOf(product.price);
    if (index > -1 && product.stock >= 0 && (product.stock < product.initialStock)) {
        cart.products.splice(index, 1);
        product.stock++;
        return 1;
    }
    return 0;
};
const calculateTotal = (cart) => {
    let total = 0;
    for (const product of cart.products) {
        total += product;
    }
    return total;
};
const cart1 = {
    products: [],
};
function showSinger(singer) {
    return `El cantante ${singer.nameSinger} de la banda ${singer.nameBand} es de genero ${singer.genreBand} y su tipo de voz es ${singer.typeOfVoice}`;
}
const singer1 = {
    nameBand: "STANCE PUNKS",
    genreBand: "Punk Rock Japonés",
    nameSinger: "Tsuru",
    typeOfVoice: "Barítono"
};
const singer2 = {
    nameBand: "The Beatles",
    genreBand: "BritRock",
    nameSinger: "Paul McCartney",
    typeOfVoice: "Tenor"
};
console.log(showSinger(singer1));
console.log(showSinger(singer2));
