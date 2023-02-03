import React from "react";
import { Alert, View, Text, TouchableOpacity } from "react-native";
import { useDeviceOrientation } from "@react-native-community/hooks";
import { Button } from "react-native-web";

const Screen1 = ({navigation}) => {
const orientation = useDeviceOrientation()
console.log(orientation)


return(
    <View>
        <TouchableOpacity onPress={()=>notifyAlert()}>
            <Button title='Clique aqui'
                color={'purple'}
                onPress={()=> alert("oii")}></Button>

                <Button title='botao'
                onPress={Alert.alert('aviso', 'deseja', [
                    {text:'nao'},
                    {text:'sim', onPress: () => deslogar()}
                ])}></Button>
        </TouchableOpacity>
    </View>
)
}
export default Screen1