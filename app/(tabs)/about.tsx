import { View, Text, StyleSheet,Image,StatusBar,ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Screen (){
    return(
        
        <SafeAreaView style={styles.container}>
        <StatusBar/>        
       <ScrollView style={styles.scroll}>
        <View style={styles.header}>

            <Image 
            source={require('../../assets/Cabeçalho.png')}
            style={styles.image}
            resizeMode="cover"/>
        </View>
        <View style={styles.tet1}>
        
        <View style={styles.column}></View>
        <View style={styles.areatext}>
        <Text>Visão</Text>
        <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </Text>
        </View>
        
        <View style={styles.column1}></View>

        </View>

  
            
        
        
        </ScrollView>
        </SafeAreaView>
        
        
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column'
        
    },
    scroll: {
        flex: 1
    },
    header:{
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    image: {
        width: 400,
        height: 300,
        right: 40
        
        

    },
    column: {
        width:25,
        height: 300,
        backgroundColor: '#f99b0d',
        borderRadius: 10,
    },
    column1: {
        width:25,
        height: 300,
        backgroundColor: '#f99b0d',
        borderRadius: 10,
        
        

    },
    tet1: {
       width: '80%',
        height: 300,
        flexDirection: 'row',
        justifyContent: 'space-between'
        

    },
    areatext : {
        flexDirection: 'column',
        width: '70%'

    }
})