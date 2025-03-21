import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const tasks = [
    { id: '1', hour: '12:00', task: 'Sacar basura', icon: '⚡' },
    { id: '2', hour: '2:00', task: 'Integrales derivadas', icon: '⚡' },
    { id: '3', hour: '4:00', task: 'Reunión importante', icon: '⚡' },
    { id: '4', hour: '6:00', task: 'Baño y piano', icon: '🌙' },
    { id: '5', hour: '8:00', task: 'Cenar', icon: '🌸' },
  ];
  

export default function HomeScreen() {
    const renderItem = ({ item }: any) => (
        <View style={styles.taskContainer}>
          <Text style={styles.hour}>{item.hour}</Text>
          <Text style={styles.task}>{item.task}</Text>
          {/* Quitamos la imagen por ahora */}
          {/* <Image source={item.icon} style={styles.icon} /> */}
        </View>
      );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu Aventura Diaria</Text>
      {/* Aquí luego agregamos el personaje y los íconos tipo nube, árbol */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
  taskContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  hour: { width: 60, fontWeight: 'bold' },
  task: { flex: 1 },
  icon: { width: 30, height: 30 },
});
