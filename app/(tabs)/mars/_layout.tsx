
import { MarsContext } from "@/components/mars-context";
import { View, Text } from "react-native";
import { Link, Stack } from "expo-router";
import { useState } from "react";
import { MarsPhoto } from "@/lib/mars";
import { FontAwesome } from "@expo/vector-icons";



export default function MarsLayout() {
    const [selectedPhoto, setSelectedPhoto] = useState<MarsPhoto>();
    return (
        <>  
            <MarsContext value={{selectedPhoto, setSelectedPhoto}}>
                <Stack screenOptions={{ 
                    // headerShown: false,
                    headerStyle:{backgroundColor:'#48a'},
                    title:'Exploring Mars',
                    headerTintColor:'#333',
                    headerRight: () => 
                    <Link href='/'>
                        <FontAwesome style={{paddingHorizontal: 8}} name='home' size={24} color='#203060'/>
                    </Link>
                }} />                
                <Text style={{backgroundColor:'#0008', textAlign: 'center', color:'#cdf', marginVertical:0}}>
                    {'*Photos extracted from '}
                    <Link href='https://api.nasa.gov' >
                        <Text style={{color:'aqua', fontStyle:'italic', textDecorationStyle:'solid' }}>NASA-Open-API</Text>  
                    </Link>
                </Text>              
            </MarsContext>
        </>
    )
}