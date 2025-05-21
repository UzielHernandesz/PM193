const productos = [
    { nombre: "Laptop", precio: 12000 }, 
    { nombre: "Mause", precio: 250 }, 
    { nombre: "Teclado", precio: 750 }, 
    { nombre: "Monitor", precio: 3000 }, 
    
]

const nombres = productos
    .filter(producto => producto.precio > 1000)
    .map(producto => producto.nombre);

console.log(nombres); 

