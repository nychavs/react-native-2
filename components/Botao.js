import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import color from "../config/color";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Botao ({myStyle, alin, bg, children, onPress}) {
    return (
        <>
        <TouchableOpacity 
        onPress={onPress}
        style={[styles.button,
        {backgroundColor:color.bg[bg]},
        {flexDirection:color.alin[alin]}]}>
            <Text 
            style={[styles.text, 
            {color: color.text[bg]}]}>
            {children}
            </Text>
            <MaterialCommunityIcons name={color.icon[myStyle]} size={24} color="black" />
        </TouchableOpacity>
        </>

    );
}

const styles = StyleSheet.create({  
    button: {
        borderRadius: 10,
        textAlign: "center",
        padding: 10,
        margin: 10,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        color:"black"
    }
})

Botao.defaultProps = {
    myStyle: 'secundary',
}

export default Botao; 
