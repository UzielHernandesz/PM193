import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Settings() {
  return (
    <View style={styles.container}>
      <Ionicons name="settings-outline" size={30} color="blue" />
      <Text style={styles.text}>Configuraciones de usuario</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 16, color: 'blue', marginTop: 10 },
});
