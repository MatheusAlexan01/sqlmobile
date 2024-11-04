import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Notifications() {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const options = [
    { id: 1, label: 'Todas as notificações' },
    { id: 2, label: 'Somente mensagens' },
    { id: 3, label: 'Notificações personalizadas' },
  ];

  const handleSelect = (id: number) => {
    setSelectedOption(id);
  };

  const handleConfirm = () => {
    Alert.alert('Sucesso', 'Suas notificações foram atualizadas!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerV}>
        
      <Text style={styles.header}>Configurações de Notificações</Text>
      </View>
      
        <View style={styles.botoesContainer}>
        {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={styles.optionContainer}
          onPress={() => handleSelect(option.id)}
        >
          <View style={styles.radio}>
            {selectedOption === option.id && <View style={styles.selected} />}
          </View>
          <Text style={styles.optionLabel}>{option.label}</Text>
        </TouchableOpacity>
      ))}

        </View>


      <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
      <View>
        <Image
        style={styles.image}
        source={{uri : 'https://bodypump.com.br/wp-content/uploads/2022/12/banner-1.webp' }}
        resizeMode="cover"
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#74bfd3',
    flexDirection: 'column'
  },
  headerV: {
 backgroundColor : '#f99b0d',
 height: 40,
 alignItems: 'center',
 justifyContent: 'center',
 borderRadius: 10,
 marginBottom: 20

  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'white',

    borderRadius: 10,
    
    
  },botoesContainer :{

    
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  optionLabel: {
    fontSize: 16,
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: '#007AFF',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  confirmText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 120,
    marginTop: 20,
    borderRadius: 5
    



  }
});
