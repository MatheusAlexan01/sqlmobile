import { View, StyleSheet, FlatList } from "react-native";
import { useState, useEffect } from "react";
import { Productdatabase, useProduct } from "../../services/banco";
import { ProductL } from "../../components/produtcList";
import { useIsFocused } from "@react-navigation/native";

export default function HomeScreen() {
  const [products, setProducts] = useState<Productdatabase[]>([]);
  const { searchbyname, remove } = useProduct();
  const isFocused = useIsFocused();

  async function loadProducts() {
    try {
      const allProducts = await searchbyname(''); // Busca todos os produtos
      setProducts(allProducts);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    }
  }

  async function removeProduct(id: number) {
    try {
      await remove(id);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  }

  useEffect(() => {
    if (isFocused) {
      loadProducts(); // Recarrega os produtos quando a tela é focada
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <ProductL data={item} OnDelete={() => removeProduct(item.id)} 
        showDeleteButton={false} 
      showId={false}
      showLer={true}/>}
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
    alignItems: 'center'
    
  },
});
