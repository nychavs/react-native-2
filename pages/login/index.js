import React, {useState} from "react";
import styles from './styles'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'


const Login = ({navigation}) => {
    // const [username, setUsername] = useState("")
    // const verify = (username) =>{
    //     if (username.length <= 3){
    //         Alert.alert('saaaaaaa', 'aaaa')
    //         console.log('uepa')
    //     }
    // }
    return(
        <View style={styles.container}>
            <View style={styles.areaInput}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="username"
                    />
                <TextInput
                    style={styles.TextInput}
                    placeholder="password"
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                onPress={()=>navigation.navigate('Home')}
                style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}
export default Login;