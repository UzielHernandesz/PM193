import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Switch, Modal, Pressable, ScrollView, ImageBackground} from 'react-native';

const HomeScreens = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMensaje, setModalMensaje] = useState('');
  const [modalTitulo, setModalTitulo] = useState('');

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const mostrarModal = (titulo, mensaje) => {
    setModalTitulo(titulo);
    setModalMensaje(mensaje);
    setModalVisible(true);
  };

  const handleRegistro = () => {
    if (!nombre.trim() || !correo.trim()) {
      mostrarModal('Error', 'Por favor completa todos los campos.');
      return;
    }

    if (!isValidEmail(correo)) {
      mostrarModal('Error', 'Correo electrónico inválido.');
      return;
    }

    if (!aceptaTerminos) {
      mostrarModal('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }

    mostrarModal('Registro exitoso', `Nombre: ${nombre}\nEmail: ${correo}`);
  };

  return (
    <ImageBackground
      source={require('../assets/image.png')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <Text style={styles.label}>Nombre completo:</Text>
        <TextInput
         style={styles.input}
         placeholder="Ingresa tu nombre"
         value={nombre}
         onChangeText={setNombre}
         autoComplete="off"
         autoCorrect={false}
         autoCapitalize="words"
         textContentType="name"
       />

        <Text style={styles.label}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo"
          keyboardType="email-address"
          value={correo}
          onChangeText={setCorreo}
          autoCapitalize="none"
        />

        <View style={styles.switchContainer}>
          <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          <Text style={styles.switchText}>Aceptar términos y condiciones</Text>
        </View>

        <Button title="Registrarse" onPress={handleRegistro} />

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{modalTitulo}</Text>
              <Text style={styles.modalText}>{modalMensaje}</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({
  container: {
  flexGrow: 1,
  justifyContent: 'center',
  padding: 20,
  paddingBottom: 80,
},
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#fff',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  switchText: {
    marginLeft: 10,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 25,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});