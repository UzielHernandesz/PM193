import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';

const App = () => {
  const [tipoComida, setTipoComida] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [restaurantes, setRestaurantes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');

  const buscarRestaurantes = async () => {
    if (!tipoComida || !ciudad) {
      setError('Por favor ingresa tipo de comida y ciudad.');
      return;
    }

    setCargando(true);
    setError('');
    setRestaurantes([]);

    try {
      const response = await axios.get('https://api.yelp.com/v3/businesses/search', {
        headers: {
          Authorization: 'Bearer QXtRNIkkO7Qu_cNqKnHCJj7Hpt7en_x9RE5WUlcOaAByj41qiwJVXB_fj4roj0MbYddD8d7B1IwrukxnVdIziFP-EvnfRh5oLXfPExPeN8gh3-4bGuNF2R7HcnZsaHYx',
        },
        params: {
          term: tipoComida,
          location: ciudad,
          limit: 10,
        },
      });

      setRestaurantes(response.data.businesses);
    } catch (err) {
      console.error('Error al obtener resultados:', err);
      setError('Error al obtener resultados. Verifica tu API Key.');
    } finally {
      setCargando(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Encuentra tu restaurante ideal</Text>

      <TextInput
        placeholder="¿Qué quieres comer? (ej. tacos)"
        value={tipoComida}
        onChangeText={setTipoComida}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TextInput
        placeholder="¿En qué ciudad? (ej. Querétaro)"
        value={ciudad}
        onChangeText={setCiudad}
        style={styles.input}
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.boton} onPress={buscarRestaurantes}>
        <Text style={styles.botonTexto}>Buscar</Text>
      </TouchableOpacity>

      {cargando && <ActivityIndicator size="large" color="#004080" style={styles.loader} />}
      {error ? <Text style={styles.error}>{error}</Text> : null}

      <ScrollView style={styles.scroll}>
        {restaurantes.map((rest, index) => (
          <View key={index} style={styles.card}>
            {rest.image_url ? (
              <Image source={{ uri: rest.image_url }} style={styles.image} />
            ) : null}
            <Text style={styles.name}>{rest.name}</Text>
            <Text style={styles.detail}>⭐ {rest.rating || 'N/A'} | 📍 {rest.location?.address1 || 'Dirección no disponible'}</Text>
            <Text style={styles.detail}>📞 {rest.phone || 'Teléfono no disponible'}</Text>
            <Text style={styles.detail}>📏 {rest.distance ? (rest.distance / 1000).toFixed(2) + ' km' : 'N/A'}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f5f7fa',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#004080',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    color: '#000',
  },
  boton: {
    backgroundColor: '#004080',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  loader: { marginVertical: 10 },
  error: { color: 'red', marginBottom: 10 },
  scroll: { marginTop: 10 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 10,
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#444',
    marginBottom: 2,
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 10,
  },
});

export default App;
