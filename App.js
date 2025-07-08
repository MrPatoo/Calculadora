import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, Button,} from 'react-native';
import { useState } from 'react';


export default function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  const calcular = (operacion) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      setResultado("Ingrese números válidos");
      return;
    }

    switch (operacion) {
      case 'suma':
        setResultado(num1 + num2);
        break;
      case 'resta':
        setResultado(num1 - num2);
        break;
      case 'multiplicacion':
        setResultado(num1 * num2);
        break;
      case 'division':
        if (num2 === 0) {
          setResultado("No se puede dividir entre 0");
        } else {
          setResultado(num1 / num2);
        }
        break;
      default:
        setResultado("Operación no válida");
    }
  };
  return (
    <View style={styles.container}>{/*contenedor principal*/}

    <Text style={styles.titulo}>{/*Titulo de la aplicacion*/}
      Calculadora 2B
    </Text>

    <View style={styles.containerInput}>{/*contenedor donde se guardan la mayoria de componentes de la aplicacion*/}
      <Text style={styles.textoNum}>Numero 1: </Text>
      {/*input #1*/}
      <TextInput style={styles.input}
      placeholder='Digite un número'
      onChangeText={(text)=> setNumero1(text)}
      />
    </View>

    <View style={styles.containerInput}>
      <Text style={styles.textoNum}>Numero 2: </Text>
      {/*input #2*/}
      <TextInput style={styles.input}
      placeholder='Digite un número'
      onChangeText={(text)=> setNumero2(text)}

      />

    </View>
    <View style={styles.btn}>{/*contenedor donde se guardan los botones*/}
    <Button title='Sumar' onPress={()=>calcular('suma')} />{/*boton de sumar*/}

    <Button title='Restar' onPress={()=>calcular('resta')} />{/*boton de restar*/}

    <Button title='Multiplicar' onPress={()=>calcular('multiplicacion')} />{/*boton de multiplicar*/}

    <Button title='Dividir' onPress={()=>calcular('division')} />{/*boton de dividir*/}

 
    </View> 
    <View style={styles.containerInput}>{/*contenedor donde se muestra el resultado*/}
      <Text style={styles.textoNum}>Resultado: 
         {resultado}</Text></View>
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
    textAlign: 'center',
  },

  input:{
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10
  },

  containerInput:{
    marginHorizontal: 20
  },

  textoNum: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20
  },

  btn: {
    marginTop:30,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
});
