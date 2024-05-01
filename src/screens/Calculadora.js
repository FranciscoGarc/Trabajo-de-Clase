import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Boton from '../components/boton';
import Input from '../components/input';

export default function Calculadora() {

    //escribir codigo Js
    //State de la aplicación
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(0)
    const [resultado, setResultado] = useState(0)

    //hacer que se sumen dos numeros

    const suma = () => {
        let sumatoria = (parseFloat(numero1) + parseFloat(numero2));
        setResultado(sumatoria);
    }
    const resta = () => {
        let rests = (parseFloat(numero1) - parseFloat(numero2));
        setResultado(rests);
    }
    const multi = () => {
        let mult = (parseFloat(numero1) * parseFloat(numero2));
        setResultado(mult);
    }
    const divi = () => {
        if (numero1 < 1 || numero2 < 1) {
            setResultado('No se puede dividir en numeros negativos');
        } else {
            let div = (parseFloat(numero1) / parseFloat(numero2));
            setResultado(div);
        }
    }

    const navigation = useNavigation();

    const goToToDo = () => {
      navigation.navigate('ToDo');
    };

    const limpiar = () => {
        setNumero1(0)
        setNumero2(0)
        setResultado(0)
    }

    return (
        <View style={styles.container}>
            <Boton
                texto={'Ir a ToDo'}
                funcion={goToToDo}
                colorEnviado='pink'
            />
            <Text style={styles.H1}>Suma de numeros</Text>
            <Text>Numero 1: </Text>
            <Input
                textPlaceHolder='Numero 1 '
                valorNumero={numero1}
                valorSetNumero={setNumero1}
            />
            <Text>Numero 2: </Text>
            <Input
                textPlaceHolder='Numero 2 '
                valorNumero={numero2}
                valorSetNumero={setNumero2}
            />
            <View style={styles.fixToText}>
                <Boton
                    texto='Suma'
                    funcion={suma}
                    colorEnviado='green'
                />
                <Boton
                    texto='Resta'
                    funcion={resta}
                    colorEnviado='purple'
                />
                <Boton
                    texto='Multiplicación'
                    funcion={multi}
                    colorEnviado='white'
                />
                <Boton
                    texto='División'
                    funcion={divi}
                    colorEnviado='orange'
                />
            </View>
            <Text style={{ color: 'red', fontSize: 30 }}>Numero 1: {numero1}</Text>
            <Text style={{ color: 'red', fontSize: 30 }}>Numero 2: {numero2}</Text>
            <Text style={{ color: 'gray', fontSize: 30 }}>Resultado: {resultado}</Text>
            <Boton
                texto='Limpiar'
                funcion={limpiar}
                colorEnviado='pink'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: 2
    },
    H1: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    }
});