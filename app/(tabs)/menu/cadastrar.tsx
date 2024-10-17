import { View, Text, StyleSheet, TextInput, Pressable, Alert } from "react-native";
import { useState, useEffect } from "react";
import * as SQLite from 'expo-sqlite';

// Função para abrir/criar o banco de dados


export default function Screen() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [url, setUrl] = useState('');
  const [prince, setPrince] = useState('');

  

  return (
    <View style={styles.container}>
      <Text>Cadastrar Produto</Text>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text>id</Text>
      <TextInput
        style={styles.input}
        value={id}
        onChangeText={setId}
      />
      <Text>URL</Text>
      <TextInput
        style={styles.input}
        value={url}
        onChangeText={setUrl}
      />
      <Text>Preço</Text>
      <TextInput
        style={styles.input}
        value={prince}
        onChangeText={setPrince}
        keyboardType="numeric"
      />
      <Pressable style={styles.button} >
        <Text>Enviar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 5,
    padding: 20,
  },
  input: {
    backgroundColor: 'gray',
    padding: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  }
});
