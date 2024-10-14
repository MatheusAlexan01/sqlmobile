import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Image,Text, Pressable} from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import { Button } from "../../components/button";
import { getProductById } from "../../services/product";
import FontAwesome from "@expo/vector-icons/FontAwesome";


export default function Screen() {
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string)

    const product = getProductById(idProduct);
    if (!product) return router.back;


    const comprar = () => {
        alert("você clicou no item " + product.title);

    }

    return (
        <SafeAreaView style={styles.container} >
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
              <Image
               style={styles.img}
               source={{uri: product.image}}
               resizeMode="center"

              
              />
              <Text style={styles.title}> {product.title}</Text>
              <Text  style= {styles.description}> {product.description}</Text>
            
       
              
            </ScrollView>
            <View style={styles.ButtonArea}
            >
                <Pressable style={styles.press} onPress={comprar}>

                <Text style={styles.title1} >Comprar  <FontAwesome size={28} name="shopping-cart" color={'white'}/> </Text>
                </Pressable>
                 <Text style= {styles.price}>R${product.price.toFixed(2)}</Text>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f6f9', // Alterado para um cinza suave que destaca os elementos
    },

    area: {
        flex: 1,
        padding: 20, // Aumentei o padding para dar mais espaçamento interno
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20, // Para criar um efeito de sobreposição com a área do cabeçalho
        elevation: 5, // Sombra para destacar o conteúdo
    },
    
    ButtonArea: {
        marginBottom: 30, // Ajustei a margem inferior para um espaço menor
        alignItems: 'center',
        backgroundColor: '#ffffff', // Fundo branco para contraste
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0', // Divisão suave entre a área de rolagem e os botões
    },
    
    img: {
        width: "100%",
        height: 300, // Aumentei um pouco a altura da imagem
        borderRadius: 10, 
        marginBottom: 20,
        backgroundColor: '#f0f0f0', // Fundo cinza claro para dar contraste enquanto a imagem carrega
    },
    
    title: {
        fontSize: 26, // Ajuste fino no tamanho da fonte
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#333', // Cor mais escura para melhor legibilidade
    },
    
    description: {
        fontSize: 16, // Aumentei levemente o tamanho da fonte
        marginBottom: 15,
        color: '#555555',
        lineHeight: 22, // Espaçamento entre linhas para melhor leitura
    },
    
    price: {
        fontSize: 24, 
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#f99b0d', // Cor verde para destacar o preço
        marginTop: 10,
    },
    
    press: {
        width: '90%',
        height: 50,
        backgroundColor: '#1e88e5', // Azul mais forte para o botão
        justifyContent: 'center',
        borderRadius: 5,
        alignItems: 'center',
        elevation: 3, // Sombra para dar destaque ao botão
        flexDirection: 'row', // Para alinhar o texto e o ícone lado a lado
        marginBottom: 10,
    },
    
    title1: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10, // Espaço entre o texto e o ícone
    }
});

