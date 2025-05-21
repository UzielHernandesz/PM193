const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 },
];

// 1. Encontrar a Luis usando find()
const luis = personas.find(persona => persona.nombre === "Luis");
console.log("Persona encontrada:", luis);

// 2. Imprimir cada persona usando forEach()
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});

// 3. Sumar todas las edades usando reduce()
const totalEdades = personas.reduce((suma, persona) => suma + persona.edad, 0);
console.log("Suma total de edades:", totalEdades);
