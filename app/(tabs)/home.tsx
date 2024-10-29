import { View, Text, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Productdatabase, useProduct } from "../../services/banco";
import { ProductL } from "../../components/produtcList"; // Ajuste o caminho se necessário

export default function Screen() {
  // Estado para armazenar a lista de produtos
  const [products, setProducts] = useState<Productdatabase[]>([]);
  const { searchbyname, remove } = useProduct();

  // Função para carregar os produtos
  async function loadProducts() {
    try {
      const allProducts = await searchbyname(''); // Busca todos os produtos
      setProducts(allProducts);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }

  // Carrega os produtos ao montar o componente
  useEffect(() => {
    loadProducts();
  }, []);

  // Função para remover o produto e atualizar a lista em tempo real
  async function removeProduct(id: number) {
    try {
      await remove(id); // Remove o produto do banco de dados
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id)); // Atualiza o estado removendo o produto
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductL data={item} OnDelete={() => removeProduct(item.id)} />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74bfd3',
  },
  list: {
    padding: 20,
  },
});
