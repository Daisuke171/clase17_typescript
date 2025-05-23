/**
1.Crear una interfaz Product con propiedades como nombre,
precio, stock y una función para calcular el valor total.

2.Implementar un sistema de tipos para un carrito de compras con 
funciones para añadir/eliminar productos y calcular el total.

3.Convertir una función JavaScript existente a 
TypeScript añadiendo tipos adecuados.
*/

///1.
interface Product {
    name: string;
    price: number;
    stock: number;
    readonly initialStock?: number;
};
interface FunctionProduct {
    (price:number, stock:number): number;
}

const totalAmount: FunctionProduct = (price=0, stock=0) => {
    return price * stock;
};
const firstItem: Product = {
    name: "Laptop Lenovo",
    price: 300,
    stock: 5,
    initialStock: 5
};
const secondItem: Product = {
    name: "Laptop HP",
    price: 500,
    stock: 3,
    initialStock: 3
};
const thirdItem: Product = {
    name: "Laptop Dell",
    price: 700,
    stock: 2,
    initialStock: 2
};
let result: number = totalAmount(firstItem.price, firstItem.stock);

console.log(`El total de ${firstItem.name} es: $${result}`);


///2.
interface Cart {
    products: number[];
}
interface CartFunction {
    (cart: Cart, product?: Product): boolean | number;
}

const addToCart: CartFunction = (cart, product) => {
    if (!product || product.stock <= 0) return false;
    
    if (product.stock <= 0) {
        console.log(`No hay stock de ${product.name}`);
        return false;
    }
    
    cart.products.push(product.price);
    product.stock--;
    return true;
};
const removeFromCart: CartFunction = (cart, product) => {
    if (!product || product.stock < 0) return false;

    const index = cart.products.indexOf(product.price);
    if (index > -1 && product.stock >= 0 && (product.stock < product.initialStock!)) {
        cart.products.splice(index, 1);
        product.stock++;
        return true;
    }
    
    return false;
};
const calculateTotal: CartFunction = (cart) => {
    let total = 0;
    for (const product of cart.products) {
        total += product;
    }
    return total;
};

const cart1: Cart = {
    products: [],
};


addToCart(cart1, firstItem);
addToCart(cart1, firstItem);
addToCart(cart1, firstItem);
addToCart(cart1, firstItem);
addToCart(cart1, firstItem);
addToCart(cart1, firstItem); // No hay stock de Laptop Lenovo
console.log("Total inicial:", calculateTotal(cart1));
console.log("Stock item 1:", firstItem.stock, "Stock inicial:", firstItem.initialStock);
removeFromCart(cart1, firstItem);
console.log("Total inicial:", calculateTotal(cart1));
console.log("Stock item 1:", firstItem.stock, "Stock inicial:", firstItem.initialStock);

addToCart(cart1, secondItem);
console.log("Total inicial:", calculateTotal(cart1));
console.log("Stock item 2:", secondItem.stock, "Stock inicial:", secondItem.initialStock);
removeFromCart(cart1, secondItem); // 3 stock
removeFromCart(cart1, secondItem); // 3 stock
console.log("Total inicial:", calculateTotal(cart1));
console.log("Stock item 2:", secondItem.stock, "Stock inicial:", secondItem.initialStock);


//3.
type Band = {
    nameBand: string;
    genreBand: string;
}
type Singer = Band & {
    nameSinger: string;
    typeOfVoice: string;
}

function showSinger(singer: Singer): string {
    return `El cantante ${singer.nameSinger} de la banda ${singer.nameBand} es de genero ${singer.genreBand} y su tipo de voz es ${singer.typeOfVoice}`;
}


const singer1: Singer = {
    nameBand: "STANCE PUNKS",
    genreBand: "Punk Rock Japonés",
    nameSinger: "Tsuru",
    typeOfVoice: "Barítono"
}

const singer2: Singer = {
    nameBand: "The Beatles",
    genreBand: "BritRock",
    nameSinger: "Paul McCartney",
    typeOfVoice: "Tenor"
}

console.log(showSinger(singer1));
console.log(showSinger(singer2));
