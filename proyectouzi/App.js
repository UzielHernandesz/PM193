/*ZONA 1: Importaciones */
import { StatusBar } from 'expo-status-bar';
import { View, TextInput, Text, StyleSheet, ScrollView, Button } from 'react-native';
import React, { useState } from 'react';


//ZONA 2: Main 
export default function App() {
 const [texto, setTexto] = useState('');




  const AlertaBasica = () => {
    window.alert('Hola Mundo, soy una alerta básica');
  };
  const AlertaConfirmacion = () => {
    const confirmacion = window.confirm('¿Gus es Gustavo?');
    if (confirmacion) {
      window.alert('Exactamente');
    } else {
      window.alert('¡Como que no!');
    }
  }
  const AlertaTexto = () => {
    const confirmacion = window.prompt('¿Erick está aquí?');
    if (confirmacion) {
      window.alert(`¡Exactamente ${confirmacion}!`);
    } else {
      window.alert('¡Responde!');
    }

    const AlerConfirmacion= () => {
    const confirmacion = window.prompt('¿Que edad tienes?');
    const numero = parseInt(confirmacion)
    if (numero >= 1 && numero <=70) {
      window.alert(`¡Tu edad es, ${numero}!`);
    } else {
      window.alert('¡Edad incorrecta como fallas en esto??!');
    }
  }
  };
  return (
    <View style={styles.container}>
      <Button title='Alerta Basica' onPress={AlertaBasica}></Button>
      <Button title='Alerta Confirmación' onPress={AlertaConfirmacion}></Button>
      <Button title='Alerta Texto' onPress={AlertaTexto}></Button>
      <Button title='Alerta Edad' onPress={AlerConfirmacion}></Button>

    </View>
  );
}


//ZONA 3: Estilos- Estética
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  
});