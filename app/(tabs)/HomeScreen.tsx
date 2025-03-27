import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TextInput,
  Button,
  SafeAreaView,    
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

const tasksInitial = [
  { id: '0', hour: '10:00', task: 'Despertar y desayunar 🌞' },
  { id: '1', hour: '12:00', task: 'Sacar basura ⚡' },
  { id: '2', hour: '2:00', task: 'Integrales derivadas⚡' },
  { id: '3', hour: '4:00', task: 'Reunión importante⚡' },
  { id: '4', hour: '6:00', task: 'Baño y piano🌙' },
  { id: '5', hour: '8:00', task: 'Cenar 🌸 ' },
  { id: '6', hour: '10:00', task: 'Dormir 🌙' },
];

export default function HomeScreen() {
  const [tasks, setTasks] = useState(tasksInitial);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState('');
  const [newHour, setNewHour] = useState('');

  const addTask = () => {
    if (newTask.trim() === '' || newHour.trim() === '') {
      alert('Por favor completa todos los campos');
      return;
    }
    const newTaskObject = {
      id: (tasks.length + 1).toString(),
      hour: newHour,
      task: newTask,
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
    setNewHour('');
    setModalVisible(false);
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.taskContainer}>
      <Text style={styles.hour}>{item.hour}</Text>
      <Text style={styles.task}>{item.task}</Text>
    </View>
  );
  const AnimatedTask: React.FC<{ title: string }> = ({ title }) => (
    <Animated.View entering={FadeInDown.duration(500)} style={styles.task}>
      <Text style={styles.taskText}>{title}</Text>
    </Animated.View>
  );

  return (
    <ImageBackground source={require('../../assets/images/WP2.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.greeting}>¡Hola, Usuario! 👋</Text>
        <Image source={require('../../assets/images/WP3.jpg')} style={styles.character} />
        <FlatList 
        data={tasks} 
        keyExtractor={(item) => item.id} 
        renderItem={renderItem}
        style={{ width: '100%' }} 
        contentContainerStyle={{ paddingBottom: 80 }} 
        />
        <TouchableOpacity style={styles.fab} onPress={() => setModalVisible(true)}>
          <Text style={styles.fabText}>+</Text>
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Agregar Nueva Tarea</Text>
              <TextInput
                placeholder="Nueva tarea"
                value={newTask}
                onChangeText={setNewTask}
                style={styles.input}
              />
              <TextInput
                placeholder="Hora (ej. 10:00)"
                value={newHour}
                onChangeText={setNewHour}
                style={styles.input}
              />
              <Button title="Agregar" onPress={addTask} />
              <Button title="Cancelar" onPress={() => setModalVisible(false)} color="#FF0000" />
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  taskText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
    textShadowColor: '#000000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  character: {
    width: 150,
    height: undefined,
    aspectRatio: 1, // Mantiene proporción cuadrada
    resizeMode: 'contain',
    marginBottom: 20,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  hour: {
    width: 80,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333333',
  },
  task: {
    flex: 1,
    fontSize: 18,
    color: '#333333',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007BFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  fabText: {
    color: '#fff',  
    fontSize: 24,
    fontWeight: 'bold',
  },
  
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
 
  
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});