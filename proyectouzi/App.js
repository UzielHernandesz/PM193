// Zona 1 importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {use, useState} from 'react';

// componente propio TEXTO

const Texto = () => {
  const [contenido,setContenido]=useState('Hola Mundo');
  const actualizarTexto = () => {setContenido('ESTADO MODIFICADO')};

  
  return(
    <Text onPress={actualizarTexto}> {contenido} </Text>
  )
}
  
/* Zona 2: Main */ 
export default function App() {
  return (
    <View style={styles.container}>
      <Texto> Hola </Texto>
      <Texto> Mundo </Texto>
      <Texto> React Native</Texto>
      <Button title='Presionar'></Button>
      <StatusBar style="auto" />
    </View>
  );
}
/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});