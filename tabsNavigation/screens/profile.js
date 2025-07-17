// screens/profile.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil usuario</Text>
      <View style={{ marginTop: 10 }}>
        <Button
          title="Detalles de Usuario"
          color="#007BFF"
          onPress={() => navigation.navigate('Detalle')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, color: 'green' },
});
