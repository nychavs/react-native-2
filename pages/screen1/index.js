import React from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Button } from "react-native-web";
import Botao from "../../components/Botao";
import styles from "./styles"

const Screen1 = ({navigation}) => {
const orientation = useDeviceOrientation()
console.log(orientation)


const deslogar = () => {
    alert('desloga')
}

const logar = () =>{
    alert('loga')

}
return(
    <View style={styles.container}>
        <View>
            {/* <TouchableOpacity onPress={()=>notifyAlert()}>
                <Button title='Clique aqui'
                    color={'purple'}
                    onPress={()=> alert("oii")}></Button>

                    <Button title='botao'
                    onPress={Alert.alert('aviso', 'deseja', [
                        {text:'nao'},
                        {text:'sim', onPress: () => deslogar()}
                    ])}></Button>
            </TouchableOpacity> */}

            <Botao 
            onPress={() => logar()}
            myStyle='login' 
            alin='right' 
            bg='primary'>
                Login
            </Botao>
            <Botao 
            onPress={() => deslogar()}
            myStyle='logout' 
            alin='left' 
            bg='secundary'>
                Logout
            </Botao>
        </View>


        {/* <View style={{backgroundColor: orientation === 'portrait'?'green':'yellow', 
        flex: orientation === 'portrait'?1:0}}></View>
        <View style={{backgroundColor: 'blue', flex:5}}>
        </View> */}
    </View>
)
}
export default Screen1