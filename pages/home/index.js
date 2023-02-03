import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import blackcat from '../../assets/blackcat-removebg-preview.png'
import styles from "./styles";

    
const Home = ({navigation}) =>{
    const [exibir, setExibir] = useState(false);
    var rnd1 = Math.floor(Math.random() * 100) + 1  
    return(
        <View>
            <View>
                {exibir? <img src={"https://picsum.photos/id/" + rnd1 + "/" + 200}></img> : null}      
            </View>
        <TouchableOpacity onPress={()=>setExibir(!exibir, rnd1.toString())}>
            <img src={blackcat}></img>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}>
            <Text>prosseguir</Text>
        </TouchableOpacity>
        </View>
    )
}
export default Home     