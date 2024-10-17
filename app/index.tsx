import { SafeAreaView } from "react-native-safe-area-context";
import { Image, StyleSheet,Text,ImageBackground } from "react-native";
import { Button } from "../components/button";
import { router } from "expo-router";

export default function Screen (){
    const start = () =>{
        router.replace('/home')
    }

    return(
        
        <SafeAreaView style={styles.container}>
            <ImageBackground 
            source={{uri: 'https://magazinefeminin.com/pt-br/wp-content/uploads/2024/07/Wallpaper-Celular-Azul-Claro-13.png'}}
            style={styles.back}>
        
            <Image
                source={require('../assets/Cabeçalho.png')}
                style={styles.logo}
                resizeMode="cover"
            />
            <Text style={styles.h1}>Pura Energia</Text>
            <Text style={styles.h2}>Suplementos de ótima e {"\n"} qualidade e bom preço</Text>
            <Button 
                title="Começar as compras"
                onPress={start}
                
            />
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    back: {
        resizeMode: 'cover',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    logo:{
        width: 400,
        height: 300, 
        marginBottom: 20
    },
    h1:{
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'
    },
    h2:{
        fontSize: 16,
        marginBottom: 10,
         color: 'white'
    }
})