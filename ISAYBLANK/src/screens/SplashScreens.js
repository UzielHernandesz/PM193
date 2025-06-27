import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import React from 'react';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/uziel1.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.title}>Bienvenido Uzielitomix a la APP</Text>
    </ImageBackground>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 10,
  },
});