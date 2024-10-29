import { View,Text,Pressable,StatusBar,StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter,Link } from "expo-router";


export  default function Screen () {
const router = useRouter()

    return (


<SafeAreaView style={styles.container}>
<StatusBar/>
<View style={styles.viewusuario}>
<Text style={styles.title}> Olá usuario, XXXXX-XXXX  <FontAwesome size={28} name="user-circle-o" color={'white'}/></Text>
</View>


<View style={styles.columnL} >
    <Link href={'./conta'} asChild>
    <Pressable >
    <View style={styles.column}>
    <Text style={styles.titleColumn}> <FontAwesome size={28} name="cog" color={'white'}/>  Minha Conta</Text>
</View>
    </Pressable>
    </Link>

</View>

<View style={styles.columnL2}>
    <Link href={'./Promocoes'} asChild>
    <Pressable >
    <View style={styles.column2}>
    <Text style={styles.titleColumn}> <FontAwesome size={28} name="bolt" color={'white'}/> Promoções</Text>
</View>
    </Pressable>
    </Link>

</View>

<View style={styles.columnL3}>
    <Link href={'./cadastrar'} asChild>
    <Pressable >
    <View style={styles.column3}>
    <Text style={styles.titleColumn}> <FontAwesome size={28} name="truck" color={'white'}/> Cadastrar Produto</Text>
</View>
    </Pressable>
    </Link>

</View>

<View style={styles.columnL4}>
 <Pressable onPress={() => router.navigate('./menu/notificacoes')}>
 <View style={styles.column4}>
    <Text style={styles.titleColumn}> <FontAwesome size={28} name="bell" color={'white'}/> Notificações</Text>
</View>
</Pressable>   

</View>




</SafeAreaView>

);

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        
       
    },
    viewusuario: {
        width: '70%',
        height: 40,
        backgroundColor: '#1899d5',
        justifyContent: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,

    },
    title : {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10


    },

    columnL:{
        backgroundColor: '#f99b0d',
        width: '75%',
        height: 50,
        position: 'absolute',
        marginTop: 140,
        borderTopRightRadius: 25
        

    },
    column: {
        width: '90%',
        height: 40,
        
        backgroundColor: '#1899d5',
        borderRadius: 10,
        justifyContent: 'center'
    },
    titleColumn : {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        

    },
    columnL2:{
        backgroundColor: '#f99b0d',
        width: '75%',
        height: 50,
        position: 'absolute',
        marginTop: 210,
        borderTopRightRadius: 25
        

    },
    column2: {
        width: '90%',
        height: 40,
        
        backgroundColor: '#1899d5',
        borderRadius: 10,
        justifyContent: 'center'
    },
    columnL3:{
        backgroundColor: '#f99b0d',
        width: '75%',
        height: 50,
        position: 'absolute',
        marginTop: 280,
        borderTopRightRadius: 25
        

    },
    column3: {
        width: '90%',
        height: 40,
        
        backgroundColor: '#1899d5',
        borderRadius: 10,
        justifyContent: 'center'
    },
    columnL4:{
        backgroundColor: '#f99b0d',
        width: '75%',
        height: 50,
        position: 'absolute',
        marginTop: 350,
        borderTopRightRadius: 25
        

    },
    column4: {
        width: '90%',
        height: 40,
        
        backgroundColor: '#1899d5',
        borderRadius: 10,
        justifyContent: 'center'
    }


    
})