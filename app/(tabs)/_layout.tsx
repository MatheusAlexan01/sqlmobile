import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout(){
    return(
            <Tabs screenOptions={{
                headerTitleAlign: 'center',
                headerStyle:{backgroundColor: '#1899d5'},
                tabBarStyle:{backgroundColor:'#1899d5'},
                tabBarInactiveTintColor:"black",
                headerTintColor:'#FFFFF',
                headerTitleStyle:{color: '#ffff'},
                 tabBarInactiveBackgroundColor: '#ffffff',
                tabBarActiveTintColor: '#000000',
            }}>
            <Tabs.Screen 
                name="home"
                options={{
                        title: 'Início',
                        tabBarIcon :({color}) => <FontAwesome size={28} name="home" color={'#f99b0d'}/>
                }}
            />
            <Tabs.Screen 
                name="categories"
                options={{
                    
                        title: 'Categorias',
                        headerShown: false,
                        tabBarIcon :({color}) => <FontAwesome size={28} name="archive" color={'#f99b0d'}/>
                }}
            />
            <Tabs.Screen 
            name="about"
            options={{
                    title: 'Sobre mim',
                    tabBarIcon :({color}) => <FontAwesome size={28} name="info" color={'#f99b0d'}/>
            }}
        />

    <Tabs.Screen 
            name="meumenu"
            options={{
                    title: 'Menu',
                    tabBarIcon :({color}) => <FontAwesome size={28} name="user" color={'#f99b0d'}/>
            }}
        />

        </Tabs>
    );
}