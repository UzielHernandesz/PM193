import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react'; //Importamos useeffect y useState
import { ActivityIndicator, FlatList, SafeAreaView } from 'react-native'; //Importamos activityIndicator

const App = () => {
  const [ loading, setLoading ] = useState(true);
  const [ users, setUsers ] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => { 
      console.error('Error al cargar usuarios: ', err);
      setLoading(false);
      });
    }, 2000);

  }, []);


const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Text style={styles.name}> {item.name} </Text>
    <Text style={styles.text}> {item.email} </Text>
    <Text style={styles.text}> {item.address.city} </Text>
    <Text style={styles.text}> {item.company.name} </Text>
  </View>
);





  return (
    <SafeAreaView style={styles.container}>
      {/* Si aun esta cargando, se muestra el indicador de carga */}
      {loading ? (
        <View style= {styles.loadingContainer}>
          <ActivityIndicator
            size= "large"
            color= "#007bff" 
          />
          <Text style={styles.loadingText}> Cargando usuarios... </Text>
        </View>
      ) : (
        <FlatList
          data={users}
          keyExtractor= { item => item.id.toString() }
          renderItem= { renderItem }
          contentContainerStyle= { styles.list }
          />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  loadingContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12, 
    fontSize: 16,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  name : {
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#333',
    marginTop: 2,
  },
});

export default App;