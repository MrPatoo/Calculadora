import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function App() {

  const[numero1, setNumero1]=useState("")
  const[numero2, setNumero2]=useState("")
  const[resultado, setResultado]=useState(0)
  const calcular= ()=>{
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const sumar = num1 + num2
    setResultado(sumar);
  }

  return (
    <View style={styles.container}>

    <Text style={styles.titulo}>
      Calculadora 2B
    </Text>

    <View style={styles.containerInput}>
      <Text style={styles.textoNum}>Numero 1: </Text>
      <TextInput style={styles.input}
      placeholder='Digite un número'
      onChangeText={(text)=> setNumero1(text)}
      />
    </View>

    <View style={styles.containerInput}>
      <Text style={styles.textoNum}>Numero 2: </Text>
      <TextInput style={styles.input}
      placeholder='Digite un número'
      onChangeText={(text)=> setNumero2(text)}

      />

    </View>
    <Button title='sumar' onPress={calcular} />
    <Text style={styles.textoNum}>resultado= {resultado}</Text>
    </View>
  );
}


//Estilo(similar al css)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 25 //Para darle espacio a la barra de notificaciones.

  },

  titulo: {
    fontSize: 20,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center'

  },

  input:{
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10
  },

  containerInput:{
    marginHorizontal: 20
  },

  textoNum: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
