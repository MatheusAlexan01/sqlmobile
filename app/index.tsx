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
            source={{uri: 'https://w0.peakpx.com/wallpaper/928/286/HD-wallpaper-gym-lover-motivation-lover-gym-fitness.jpg'}}
            style={styles.back}>
        
            <Image
                source={require('../assets/creatine.png')}
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
        width: 200,
        height: 200, 
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