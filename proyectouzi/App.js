// Zona 1 importaciones 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

const Texto = (props) => {
  const {contenido}=props
  return(
    <Text>{contenido}</Text>
  )
}
  
/* Zona 2: Main */ 
export default function App() {
  return (
    <View style={styles.container}>
      <Texto></Texto>
      <Texto></Texto>
      <Texto></Texto>
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