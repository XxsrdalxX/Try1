import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground } from 'react-native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types'; // ✅ ya lo tienes
import { useRouter } from 'expo-router';

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Register'>;

export default function RegisterScreen({ navigation }: { navigation: RegisterScreenNavigationProp }) {
const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      alert('Por favor completa todos los campos');
      return;
    }
    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert(`Usuario ${email} registrado exitosamente 🚀`);
    // Aquí podrías guardar los datos o redirigir
    // navigation.navigate('Login');
    router.push('./index');
  };

  return (
    <ImageBackground source={require('../../assets/images/WP1.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Registro</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <Button title="Registrarse" onPress={handleRegister} />
        <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
          ¿Ya tienes una cuenta? Inicia sesión
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#000',
    backgroundColor: '#f9f9f9',
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});
