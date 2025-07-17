import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.container}>
      <Ionicons name="home-outline" size={30} color="red" />
      <Text style={styles.text}>Perfil de usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16, color: 'red', marginTop: 10 },
});
