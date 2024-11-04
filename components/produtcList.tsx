// ProductL.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet,Image } from "react-native";
import { Productdatabase } from "../services/banco"; // Importe o tipo Productdatabase do caminho correto

interface ProductLProps {
  data: Productdatabase;
  OnDelete?: () => void;
  showDeleteButton?: boolean;
  showId?: boolean;
  showLer?: boolean;
}

export function ProductL({ data, OnDelete, showDeleteButton = true, showId = true, showLer= true }: ProductLProps) {
  return (
    <View style={styles.container}>
      {showId && <Text style={styles.idText}>ID:# {data.id}</Text>}
      <Text style={styles.nameText}>Nome: {data.name}</Text>
      <Image source={{ uri: data.url }} style={styles.image} />
      <Text style={styles.priceText}>Preço: R${data.prince}</Text>
      {showDeleteButton && (
        <Pressable onPress={OnDelete} style={styles.deleteButton}>
          <Text style={styles.deleteButtonText}>Deletar</Text>
        </Pressable>
       
      )}
       {showLer && (
        <Pressable  style={styles.LerButton}>
          <Text style={styles.deleteButtonText}>Ler mais+</Text>
        </Pressable>
       
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 10,
    alignItems: 'center', 
    
  },
  idText: { fontSize: 14,
    color: 'black',
    marginBottom: 5 },
  nameText: { fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5, },
  priceText: { fontSize: 14, color: '#888',fontWeight : 'bold' },
  deleteButton: { backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5, },
  deleteButtonText: { color: 'white', textAlign: 'center' },
  image :{width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
    
    LerButton : {
    backgroundColor: '#1899d5',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '100%',
    marginTop: 10


    }
});
