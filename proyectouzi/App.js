/* Zona 1: Lugar de las importaciones */  
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, TextInput, Text,View,Button,Alert,ScrollView,TouchableOpacity,TouchableHighlight,TouchableNativeFeedback,Pressable,Switch,TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import { Button as ButtonPaper, Provider as ProveedorPaper } from 'react-native-paper'; 
import { Button as ButtonElements } from 'react-native-elements';

/* Zona 2: Main */
export default function App() {

  const [defaultText, onChangeDefault] = useState('');
  const [emailText, setEmailText] = useState('');
  const [numberPadText, setNumberPadText] = useState('');
  const [decimalPadText, setDecimalPadText] = useState('');
  const [numericText, setNumericText] = useState('');
  const [phoneText, setPhoneText] = useState('');
  const [urlText, setUrlText] = useState('');
  const [visiblePassword, setVisiblePassword] = useState('');

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPhone = (phone) => /^[0-9]{7,15}$/.test(phone);
  const isValidUrl = (url) => /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/[\w.-])\/?$/.test(url);
  const isNumeric = (value) => /^[0-9]+$/.test(value);
  const isDecimal = (value) => /^[0-9]*\.?[0-9]+$/.test(value);


  const AlertaBasica = () => {
    window.alert('Hola, soy una alerta basica');
  };

  const AlertaConfirmacion = () => {
    const confirmacion = window.confirm('¿Gus es gustambo?');
    if (confirmacion) {
      window.alert('Exactamente');
    } else {
      window.alert('Como que no?');
    }
  };

  const AlertaTexto = () => {
    const confirmacion = window.prompt('¿Erick está aqui?', 'ñero');
    if (confirmacion) {
      window.alert(`Exactamente, ${confirmacion}`);
    } else {
      window.alert('Respondeeeeeee');
    }
  };

  const AlertaConfrimacion = () => {
    const confirmacion = window.prompt('Que edad tienes?');
    const numero = parseInt(confirmacion);
    if (numero >= 1 && numero <= 70) {
      window.alert(`Tu edad es, ${numero}`);
    } else {
      window.alert('Edad icnorrectaaaaaaaaa');
    }
  };

  const AlertaTimpo = () => {
    setTimeout(() => {
      window.alert('Hola, han pasado 5 segundos');
    }, 5000);
  };

  const alertaRedireccion = () => {
    if (window.confirm('¿Quieres ir a Google?')) {
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>default: </Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeDefault}
          value={defaultText}
          placeholder="Escribe solo texto"
          keyboardType='default'
        />

        <Text style={styles.label}>number pad: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe solo numeros'
          keyboardType='number-pad'
          value={numberPadText}
          onChangeText={(text) => {
            if (isNumeric(text) || text === '') setNumberPadText(text);
          }} 
        />

        <Text style={styles.label}>decimal-pad: </Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa números decimales"
          keyboardType="decimal-pad"
          value={decimalPadText}
          onChangeText={(text) => {
            if (isDecimal(text) || text === '') setDecimalPadText(text);
          }}
        />

        <Text style={styles.label}>numeric: </Text>
        <TextInput
          style={styles.input}
          placeholder='Escribe numeros'
          keyboardType='numeric'
          value={numericText}
          onChangeText={(text) => {
            if (isNumeric(text) || text === '') setNumericText(text);
          }}
        />

        <Text style={styles.label}>Correo: </Text>
        <TextInput
          style={[styles.input, !isValidEmail(emailText) && emailText ? styles.errorInput : null]}
          placeholder='Escribe un correo'
          keyboardType='email-address'
          value={emailText}
          onChangeText={setEmailText}
          autoCapitalize='none'
        />
        {!isValidEmail(emailText) && emailText !== '' && (
          <Text style={styles.errorText}>Correo no válido</Text>
        )}

        <Text style={styles.label}>phone-pad: </Text>
        <TextInput
          style={[styles.input, !isValidPhone(phoneText) && phoneText ? styles.errorInput : null]}
          placeholder="Ingresa teléfono"
          keyboardType="phone-pad"
          value={phoneText}
          onChangeText={setPhoneText}
        />
        {!isValidPhone(phoneText) && phoneText !== '' && (
          <Text style={styles.errorText}>Teléfono inválido</Text>
        )}

        <Text style={styles.label}>url:</Text>
        <TextInput
          style={[styles.input, !isValidUrl(urlText) && urlText ? styles.errorInput : null]}
          placeholder="Ingresa URL"
          keyboardType="url"
          value={urlText}
          onChangeText={setUrlText}
          autoCapitalize="none"
        />
        {!isValidUrl(urlText) && urlText !== '' && (
          <Text style={styles.errorText}>URL inválida</Text>
        )}

        <Text style={styles.label}>visible-password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa Contraseña"
          keyboardType="visible-password"
          value={visiblePassword}
          onChangeText={setVisiblePassword}
          secureTextEntry={false}
          autoCapitalize="none"
        />
       </ScrollView>


      
      <Button title='Alerta basica' onPress={AlertaBasica}></Button>
      <Button title='Alerta de confirmacion' onPress={AlertaConfirmacion}></Button>
      <Button title='Alerta Erick' onPress={AlertaTexto}></Button>
      <Button title='Alerta Edad' onPress={AlertaConfrimacion}></Button>
      <Button title='Alerta con tiempo' onPress={AlertaTimpo}></Button>
      <Button title='Alerta redireccion' onPress={alertaRedireccion}></Button>
    </View>
  );
}

/* Zona 3: Estilos */ 
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
  },
  label: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 4,
  },
});