import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import blackcat from '../../assets/blackcat-removebg-preview.png'
import styles from "./styles";

const [exibir, setExibir] = useState(false);
const exibe = () =>{
    setExibir(!exibir)
}

const Home = () =>{
    return(
        <View>
            <View>
                {exibir? <img src={blackcat}></img> : null}      
            </View>
        <TouchableOpacity onPress={()=>exibir()}>
            <img src={blackcat}></img>
        </TouchableOpacity>
        </View>
    )
}
export default Home 