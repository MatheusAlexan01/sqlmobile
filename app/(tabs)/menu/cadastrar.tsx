import { View, Text, StyleSheet, TextInput, Pressable, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { Productdatabase, useProduct } from "../../../services/banco";
import { ProductL } from "../../../components/produtcList";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

export default function CadastroScreen({ navigation }) {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [url, setUrl] = useState('');
  const [prince, setPrince] = useState('');
  const [product, setProduct] = useState<Productdatabase[]>([]);
  const produtobanco = useProduct();
  const isFocused = useIsFocused();

  // Função para cadastrar produto
  async function CreateProduct() {
    if (!name || !id || !url || !prince) {
      Alert.alert('Erro', 'Todos os campos devem estar preenchidos.');
      return;
    }
  
    if (!/^\d+$/.test(id)) {
      Alert.alert('Erro', 'O campo "id" deve conter apenas números.');
      return;
    }
    
    try {
      await produtobanco.criarbanco({
        name,
        id: Number(id),
        url,
        prince: Number(prince)
      });
      Alert.alert('Produto cadastrado com sucesso!');
      list();
    } catch (error) {
      Alert.alert('Erro ao cadastrar produto');
    }
  }

  // Função para listar produtos
  async function list() {
    try {
      const response = await produtobanco.searchbyname('');
      setProduct(response);
    } catch (error) {
      console.error(error);
    }
  }

  // Função para remover produto e atualizar lista
  async function removeProduct(id: number) {
    try {
      await produtobanco.remove(id);
      Alert.alert('Produto deletado');
      list();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (isFocused) {
      list();
    }
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container1}>
      <StatusBar />
      <FlatList
        data={product}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Cadastrar Produto</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Nome" placeholderTextColor="#ffffff"/>
            <TextInput style={styles.input} value={id} onChangeText={setId} placeholder="ID" keyboardType="numeric" placeholderTextColor="#ffffff"/>
            <TextInput style={styles.input} value={url} onChangeText={setUrl} placeholder="URL da Imagem" placeholderTextColor="#ffffff"/>
            <TextInput style={styles.input} value={prince} onChangeText={setPrince} placeholder="Preço" keyboardType="numeric" placeholderTextColor="#ffffff"/>
            <Pressable style={styles.button} onPress={CreateProduct}>
              <Text style={styles.buttonText}>Enviar</Text>
            </Pressable>
          </View>
        }
        renderItem={({ item }) => (
          <ProductL data={item} OnDelete={() => removeProduct(item.id)} />
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container1: { flex: 1, backgroundColor: '#ffffff' },
  headerContainer: {
    padding: 20,
    backgroundColor: '#1899d5',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#f99b0d',
    color: '#ffffff',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#f99b0d',
    padding: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 20,
  },
});
