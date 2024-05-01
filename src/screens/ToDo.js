import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ToDo() {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);
    const navigation = useNavigation();

    const goToScreen2 = () => {
      navigation.navigate('Calculadora');
    };

    const handleAddTask = () => {
        if (task.trim()) {
            setTaskList([...taskList, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        const updatedTaskList = [...taskList];
        updatedTaskList.splice(index, 1);
        setTaskList(updatedTaskList);
    };

    return (
        <View style={styles.container}>
            <Button 
            title="Ir a calculadora" 
            onPress={goToScreen2} />
            <Text style={styles.title}>To-Do</Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => setTask(text)}
                    value={task}
                    placeholder="Agregar una tarea"
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={taskList}
                renderItem={({ item, index }) => (
                    <View style={styles.taskContainer}>
                        <Text style={styles.taskText}>{item}</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteTask(index)}>
                            <Text style={styles.deleteButtonText}>Borrar</Text>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: 'blue',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 4,
    },
    addButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    taskText: {
        flex: 1,
        fontSize: 16,
    },
    deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 4,
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
    },
});