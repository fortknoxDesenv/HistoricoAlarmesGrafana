import React from 'react';
import { StyleSheet,Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const logo = require('./src/image/logo.png');

  return (
    <View style={styles.container}>
      <Image source={logo} style={{width:'80%', height: 100}} />
      <TextInput style={styles.textInput} placeholder="Usuário" />
      <TouchableOpacity style={styles.btnEntrar} >
        <Text style={styles.txtEntrar}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D2D6D9',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: -40
  },
  textInput: {
    borderBottomWidth: 1,
    textAlign: "center",
    width: '80%',
    fontSize: 20
  },
  btnEntrar: {
    width: '80%',
    height: '8%',
    backgroundColor: '#42708C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtEntrar: {
    color: "#999F8A",
    fontSize: 18,
    fontWeight: 'bold',
  }
});
