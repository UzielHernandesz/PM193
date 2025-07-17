// screens/PerfilStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './profile';
import Detalle from './detalle';

const Stack = createNativeStackNavigator();

export default function PerfilStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
}
