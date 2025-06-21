/* Zona 1: Lugar de las importaciones */  
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text,View,Button,Alert,ScrollView,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback,Pressable,Switch,TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import { Button as ButtonPaper, Provider as ProveedorPaper } from 'react-native-paper'; 
import { Button as ButtonElements } from 'react-native-elements';

/* Zona 2: Main */
export default function App() {
  const [modoOscuro, setModoOscuro] = useState(false);
  const alternarModoOscuro = () => setModoOscuro(previo => !previo); 

  return (
    <ProveedorPaper>
      <ScrollView contentContainerStyle={styles.ScrollContainer}>
        <View style={[styles.container, { backgroundColor: modoOscuro ? '#111' : '#fff' }]}>
          <Text style={styles.title}>Modo de pantalla: {modoOscuro ? 'oscuro' : 'claro'}</Text>
          <Switch value={modoOscuro} onValueChange={alternarModoOscuro} />
        </View>

        {/* Botón 1 */}
        <View style={styles.section}>
          <Text style={styles.title}>Primer Botón</Text>
          <Button
            title="Botón Nativo"
            color="#007bff"
            onPress={() => Alert.alert('Botón Nativo Presionado')}
          />
        </View>

        {/* Botón 2 */}
        <View style={styles.section}>
          <Text style={styles.title}>Segundo Botón</Text>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: '#28a745' }]}
            onPress={() => Alert.alert('TouchableOpacity')}
          >
            <Text style={styles.btnText}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>

        {/* Botón 3 */}
        <View style={styles.section}>
          <Text style={styles.title}>Tercer Botón</Text>
          <TouchableHighlight
            style={[styles.btn, { backgroundColor: '#ffc107' }]}
            underlayColor="#e0a800"
            onPress={() => Alert.alert('Botón 3')}
          >
            <Text style={styles.btnText}>TouchableHighlight</Text>
          </TouchableHighlight>
        </View>

        {/* Botón 4 */}
        <View style={styles.section}>
          <Text style={styles.title}>4. TouchableWithoutFeedback: sin retroalimentación visual</Text>
          <TouchableWithoutFeedback onPress={() => Alert.alert('¡Sin retroalimentación visual!')}>
            <View style={[styles.btn, { backgroundColor: '#17a2b8' }]}>
              <Text style={styles.btnText}>Sin retroalimentación</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Botón 5 */}
        <View style={styles.section}>
          <Text style={styles.title}>5. Pressable: control total sobre estados como presionado</Text>
          <Pressable
            style={({ pressed }) => [
              styles.btn,
              { backgroundColor: pressed ? '#6c757d' : '#343a40' },
            ]}
            onPress={() => Alert.alert('¡Presionaste Pressable!')}
          >
            <Text style={styles.btnText}>Pressable</Text>
          </Pressable>
        </View>

        {/* Botón 6 */}
        <View style={styles.section}>
          <Text style={styles.title}>6. Botón de Paper: diseño moderno y elegante</Text>
          <ButtonPaper
            mode="contained"
            buttonColor="#9c27b0"
            textColor="#fff"
            onPress={() => Alert.alert('¡Presionaste el botón de Paper!')}
            style={styles.paperButton}
          >
            Botón de Papel
          </ButtonPaper>
        </View>

        {/* Botón 7 */}
        <View style={styles.section}>
          <Text style={styles.title}>7. Botón de Elements: con iconos y estilos</Text>
          <ButtonElements
            title="Botón Elements"
            onPress={() => Alert.alert('¡Presionaste el botón de Elements!')}
            buttonStyle={{
              backgroundColor: '#ff5722',
              borderRadius: 10,
              padding: 10,
            }}
            titleStyle={{ fontWeight: 'bold', fontSize: 16 }}
          />
        </View>

        <StatusBar style="auto" />
      </ScrollView>
    </ProveedorPaper>
  );
}

/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 50,
  },
  title: {
    fontSize: 16,
    marginVertical: 6,
    textAlign: 'center',
    color: '#000',
  },
  section: {
    marginVertical: 15,
    alignItems: 'center',
    width: '100%',
  },
  btn: {
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: 220,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  paperButton: {
    marginTop: 5,
    width: 220,
  },
});