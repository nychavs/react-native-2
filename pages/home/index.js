import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import blackcat from '../../assets/blackcat-removebg-preview.png'
import styles from "./styles";

    
const Home = () =>{
    const [exibir, setExibir] = useState(false);
    var rnd1 = Math.floor(Math.random() * 100) + 1  
    var rnd2 = Math.floor(Math.random() * 100) + 1 
    return(
        <View>
            <View>
                {exibir? <img src={"https://picsum.photos/id/" + rnd1 + "/" + rnd2}></img> : null}      
            </View>
        <TouchableOpacity onPress={()=>setExibir(!exibir, rnd1.toString(), rnd2.toString())}>
            <img src={blackcat}></img>
        </TouchableOpacity>
        </View>
    )
}
export default Home     