import {TouchableOpacity, Text, StyleSheet} from 'react-native';

export default function Boton({texto, funcion, colorEnviado}){

    return(
        <TouchableOpacity
        style={[styles.btn, { backgroundColor: colorEnviado }]}
        onPress={funcion}>
            <Text style={styles.text}>{texto}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn:{
      padding:15,
      width:150, 
      marginBottom:5,
      margin: 5
    }, 
    text:{
      textAlign:'center', 
      fontWeight:'900'
    }
  });