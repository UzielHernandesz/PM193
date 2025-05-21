const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: {
        ciudad: "Qro",
        pais: "Mexico",
    }
};
// imprimir destructuacion aqui
const { nombre, edad, direccion: { ciudad } } = persona;
// imprimir el mensaje aqui
console.log(`Hola, me llamo ${nombre} y tengo ${edad} años y vivo en ${ciudad}`); // "Hola, me llamo Ivan Isay y tengo 37 años y vivo en qro."


