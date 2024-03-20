import React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default App = () => {
  return(
    <View style={styles.container}>
      <View style={styles.barraSuperior}>
        <Image 
        source={require('./imagenes/RecetApp.png')}
        style={styles.logo}
        />
        <Text style={styles.tittle}>Inicio</Text>
      </View>
      <View style={styles.barraInferior}>
        <TouchableOpacity style={styles.botonesMenu}>
          <Text>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonesMenu}>
          <Text>Búsqueda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonesMenu}>
          <Text>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonesMenu}>
          <Text>Configuración</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'column',
    backgroundColor: '#F9F8EB',
    height: '100%',
  },
  barraSuperior: {
    //flex: 0,
    flexDirection: 'row',
    backgroundColor: '#76B39D',
    top: 42
  },
  barraInferior: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#76B39D',
    height: '7%',
    width: '100%',
    alignItems: 'center'
  },
  logo: {
    height: 65,
    width: 65
  },
  tittle: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    top: 19,
    left: 200
  },
  botonesMenu: {
    paddingLeft: 42
  },
})