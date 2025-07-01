import{
  ScrollView, //hacer el deslizable
  StatusBar, //barra de estado
  StyleSheet, //estilos
  Text, //texto
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
 return (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container} edges={['top']}>
      <ScrollView style={styles.scrollView} horizontal={true}>
        <ScrollView>
          <Text style={styles.text}>
            Este es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades.     
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades.  
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
            ste es un ejemplo de una aplicación React Native con SafeAreaView y ScrollView.
            Puedes agregar más contenido aquí para ver cómo funciona el desplazamiento.
            Asegúrate de que el contenido sea lo suficientemente largo para activar el desplazamiento.
            Puedes personalizar los estilos según tus necesidades. 
          </Text>
        </ScrollView>
      </ScrollView>
      </SafeAreaView>

  </SafeAreaProvider>
  );
}



 //Definimos los estilos con StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,                             // Ocupa todo el alto disponible de la pantalla
    paddingTop: StatusBar.currentHeight // Evita que el contenido se solape con la barra de estado
  },
  scrollView: {
    backgroundColor: 'green',            // Fondo rosa para visualizar el área del ScrollView
  },
  text: {
    fontSize: 42,                        // Texto grande
    padding: 12,                         // Espaciado interno
  },
});

// Exportamos el componente para que pueda ser usado por la app
export default App;