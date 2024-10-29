import { View, Text, StyleSheet, TextInput, Pressable, Alert,FlatList, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { Productdatabase, useProduct } from "../../../services/banco";
import { ProductL } from "../../../components/produtcList";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";


export default function Screen() {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [url, setUrl] = useState('');
  const [prince, setPrince] = useState('');
  const [search, setsearch] = useState('');
  const [product, setproduct] = useState<Productdatabase[]>([]);
  const produtobanco = useProduct();
  
  async function CreateProduct() {
    // Chame a função `criarbanco` em vez de `Create`
     const resposive =  await produtobanco.criarbanco({
      name,
      id: Number(id),
      url,
      prince: Number(prince)
    })
    list()
    .then(() => Alert.alert('Produto cadastrado com sucesso!'))
    .catch(err => Alert.alert('Erro ao cadastrar produto', err.message));
  }


  async function list() {
    try{
      const  resposive = await produtobanco.searchbyname(search)
      setproduct(resposive)

    }catch(error){
      console.log(error)


    }

    
  }

  useEffect(()=>{
    list()
    
  },[search])

   async function remove( id: number){
  try{
    await produtobanco.remove(id)
      alert('produto deletado')
  }catch(error){
    console.log(error)
  }




  }
  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar/>
      <ScrollView>
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
      <Pressable style={styles.button} onPress={CreateProduct}>
        <Text>Enviar</Text>
      </Pressable>

      <FlatList
      data={product}
      keyExtractor={(item)=> String(item.id)}
      renderItem={({item}) =><ProductL data={item} OnDelete={() =>remove(item.id)}/>}
      />


    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: {
    
  },
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
