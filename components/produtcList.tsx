import { View, ViewProps, Text, Image, StyleSheet,Pressable } from "react-native";
import {MaterialIcons} from "@expo/vector-icons"

type props = ViewProps & {
  data: {
    name: string;
    id: number;
    url: string;
    prince: number;
  };
  OnDelete: () => void
};

export function ProductL({ data,OnDelete, ...rest }: props) {
  return (
    <View {...rest} style={styles.itemContainer}>
      <Text>ID: {data.id}</Text>
      <Text>Nome: {data.name}</Text>
      <Text>Preço: R$ {data.prince.toFixed(2)}</Text>
      <Image source={{ uri: data.url }} style={styles.image} />
      
      <Pressable  onPress={OnDelete}>
      
      <MaterialIcons name="delete" size={24} color='red'/>
      
      </Pressable>
      
    
    
    
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 5,
  },
});
