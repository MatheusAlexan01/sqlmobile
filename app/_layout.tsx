import { Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { iniciarbanco } from "../services/banco";

export default function RootLayout(){
    return(
        <SQLiteProvider databaseName="mydata.db" onInit={iniciarbanco}>
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name="(tabs)"/>
            <Stack.Screen name= "product/[id]"options={{headerShown:true}}/>
            
        </Stack>
        </SQLiteProvider>
    );
}