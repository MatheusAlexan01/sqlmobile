import { Link } from "expo-router";
import { Product } from "../types/product"
import {Pressable, Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    data: Product;
}

export const ProductItem = ({data}: Props) =>{
    return(
        // rota dinamica
            <Pressable style={styles.container}>
                <Image
                    style={styles.img}
                    source={{uri: data.image}}
                    resizeMode="center"
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{data.title}</Text>
                    
                    <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
                    <Link href={`/product/${data.id}`} asChild>
                    <Pressable style={styles.ler}>
                        <Text style={styles.tilerLer}>Ler Mais+</Text>
                    </Pressable>
                    </Link>
                    
                </View>
            </Pressable>
          
      
    );
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#ffffff',
        height: 120,
        borderRadius: 5,
       
    },
    img:{
        width: 100,
        height: 110,
        borderRadius: 10,
        backgroundColor: "#fffff",
        marginRight: 20,
        marginTop: 5
    },
    info:{
        flex: 1
    },
    title:{
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10
    },
    description:{
        fontSize: 13,
        color: "#555555",
        marginBottom: 10
    },
    price:{
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    ler:{
        width: '70%',
        backgroundColor: '#65a9f7',
        height: 40,
        marginTop: 5,
        borderRadius: 5,
        justifyContent: 'center'


    },
    tilerLer : {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        


    }
})