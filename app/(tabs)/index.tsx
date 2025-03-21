import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Expo Router navega así

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password){
        Alert.alert("Por favor completa todos los campos");
        return;
    }
    Alert.alert(`Bienvenido ${email}`);
    console.log('Correo:', email);
    console.log('Contraseña:', password);

    // Ejemplo de navegación: después del login
    // router.push('/tabs/explorer'); // o la pantalla que quieras mostrar
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Ingresar" onPress={handleLogin} />
      <Text
        style={styles.link}
        onPress={() => router.push('/registerscreen')} // ruta del registro
      >
        ¿No tienes una cuenta? Regístrate
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff', // ⬅️ FONDO BLANCO 🔥
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000', // ⬅️ TEXTO NEGRO 💣
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000', // ⬅️ COLOR DEL TEXTO DENTRO DEL INPUT
    backgroundColor: '#f9f9f9', // ⬅️ Fondo clarito del input
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});
