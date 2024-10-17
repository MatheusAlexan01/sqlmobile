import { Stack, Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout(){
    return(
            <Stack screenOptions={{
                
            }}>

            <Stack.Screen
            name="meumenu"
            options={{
                title: 'Menu',
                headerTitleAlign: 'center',
                headerStyle:{backgroundColor: '#1899d5'},
                headerTintColor:'#FFFFFF'
            }}
            
            
            />

            <Stack.Screen
                name="conta"
                options={{
                        title: 'Conta',
                       
                }}
            />

            <Stack.Screen
                name="Promocoes"
                options={{
                        title: 'Ofertas e Promoções',
                       
                }}
            />

            <Stack.Screen
                name="cadastrar"
                options={{
                        title: 'Cadastrar',
                       
                }}
            />

            <Stack.Screen
                name="notificacoes"
                options={{
                        title: 'Notificações',
                       
                }}
            />
            

        </Stack>
    );
}