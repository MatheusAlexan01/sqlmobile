import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen() {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      <View style={styles.containerPerfil}>
        <Image
          style={styles.imagePerfil}
          source={{ uri: 'https://cdn-0001.qstv.on.epicgames.com/vqFmqDXBJZiNuVICGz/image/landscape_comp.jpeg' }}
        />
        <View style={styles.Perfilname}>
          <Text style={styles.textName}>Usuário: Jedson da Silva</Text>
        </View>
      </View>

      <View style={styles.containerDados}>
        <View style={styles.title}>
            <Text style={styles.titleDados}>Dados Pessoais:</Text>
        </View>
        <View style={styles.dataField}>
          <Text style={styles.fieldLabel}>Nome:</Text>
          <Text style={styles.fieldValue}>Jedson da Silva</Text>
        </View>
        <View style={styles.dataField}>
          <Text style={styles.fieldLabel}>Data de Nascimento:</Text>
          <Text style={styles.fieldValue}>01/01/1990</Text>
        </View>
        <View style={styles.dataField}>
          <Text style={styles.fieldLabel}>E-mail:</Text>
          <Text style={styles.fieldValue}>jedson@example.com</Text>
        </View>
        <View style={styles.dataField}>
          <Text style={styles.fieldLabel}>Telefone:</Text>
          <Text style={styles.fieldValue}>(11) 99999-9999</Text>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#74bfd3',
    paddingVertical: 20,
  },
  containerPerfil: {
    width: '90%',
    backgroundColor: '#ffffff',
    height: 350,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 15,
  },
  imagePerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 15,
  },
  Perfilname: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#f99b0d',
    paddingVertical: 8,
    borderRadius: 5,
  },
  title :{
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  textName: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  titleDados:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',

  }
  ,
  containerDados: {
    width: '90%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
  },
  dataField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  fieldValue: {
    fontSize: 16,
    color: '#666666',
  },
});
