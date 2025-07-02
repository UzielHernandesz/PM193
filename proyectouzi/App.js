// Importamos react y sus funciones para manejar estados y ejecutar código cuando
// la app cargue 
import React, { useEffect, useState } from 'react';

// Importamos componentes de react native para mostrar la interfaz, listas y estilos
import { View, Text, FlatList, SectionList, StyleSheet } from 'react-native';

//Creamos el componente principal App y usamos un estado "personas" que está vacío
export default function App() {
  const [personas, setPersonas] = useState([]); //Con setPersona actualizamos y obtenemos el backend

  //Se ejecuta una vez cuando la app carga
  useEffect(() => {
    fetch('http://localhost:8000/nombres') //llamamos el endpoint
      .then(res => res.json()) //si la respuesta llega correcta entonces
      .then(data => setPersonas(data)) // guardamos los datos en setPersonas
      .catch(err => console.error(err)); //sino muestra el error
  }, []);

  // Datos para FlatList: mostramos solo nombres
  // Usamos map para ir trayendo los datos y transformarlos en un nuevo arreglo
  const flatData = personas.map((p, index) => ({
    key: index.toString(), //convierte el número a texto
    nombre: p.Nombre, //traemos solo el nombre de p que es personas
    apellido: p.Apellido
  }));

  // Datos para SectionList: agrupado por Apellido
  const sectionData = personas.map((p) => ({
    title: p.Apellido, //aqui traemos de acuerdo a una sección específica, osea apellidos
    data: [p.Nombre] // traemos también el nombre pero solo como extra
  }));

  // Renderizamos la interfaz de usuario
  return (

    //Esto es para flatlist
    <View style={styles.container}>
      <Text style={styles.title}>FlatList - Solo Nombres</Text>
      <FlatList 
        data={flatData} //por cada dato, que se cree un texto
        renderItem={({ item }) => <Text style={styles.item}>{item.apellido} {item.nombre}</Text>}
        keyExtractor={item => item.key}
      />

      {/* Esto es para SectionList */}
      <Text style={styles.title}>SectionList - Agrupado por Apellido</Text> {/* Muestra el título */}
      <SectionList
        sections={sectionData} /* Se pasan los datos a mostrar en la SectionList */
        keyExtractor={(item, index) => item + index} /* Se identifica de manera unica el item, Andrea0, Carol1 */
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} /* defino cada elemento de una sección (nombres)*/
        renderSectionHeader={({ section: { title } }) => ( /* defino como mostrar cada seccion (apellidos) */
          <Text style={styles.header}>{title}</Text> 
        )}
      />
    </View>
  );
}

// Son los estilos que le dare a la interfaz
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  item: { padding: 10, fontSize: 16 },
  header: { fontSize: 18, fontWeight: 'bold', backgroundColor: '#ddd', padding: 5 },
});