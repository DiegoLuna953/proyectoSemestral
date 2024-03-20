import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.inicioSesion}>
        <TextInput
        style={styles.textInput1}
        placeholder='Enter username'
        />
        <TextInput
        style={styles.textInput2}
        placeholder='Enter password'
        />
        <TouchableOpacity style={styles.button}>
          <Text>Ingresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    backgroundColor: '#F9F8EB',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inicioSesion: {
    backgroundColor: '#76B39D',
    height: 250,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  textInput1: {
    backgroundColor: 'white',
    width: 150,
    //padding: 20
  },
  textInput2: {
    backgroundColor: 'white',
    width: 150,
    //padding: 20
  },
  button: {
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#F5E8DD',
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 40
  }
})