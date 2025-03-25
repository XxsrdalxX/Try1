import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, Alert, Image, TouchableOpacity, ActivityIndicator, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    if (!email) {
      Alert.alert("Por favor complete el campo de correo");
      return false;
    } else if (!re.test(email)) {
      Alert.alert("Digite un correo válido");
      return false;
    }
    return true;
  }

  const handleLogin = () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert("Por favor completa todos los campos");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setLoading(false);
      return;
    }
    Alert.alert(`Bienvenido ${email}`);
    console.log('Correo:', email);
    console.log('Contraseña:', password);

    setLoading(false);
    router.push('./tabs/explore');
  };

  return (
    <ImageBackground source={require('../../assets/images/WP4.jpg')} style={styles.background}>
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
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
        )}
        <Text
          style={styles.link}
          onPress={() => router.push('/registerscreen')}
        >
          ¿No tienes una cuenta? Regístrate
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
  button: {
    width: '100%',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textAlign: 'center',
  },
});