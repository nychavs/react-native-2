import React, {useState} from "react";
import styles from './styles'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

// const [username, setUsername] = useState(' ')
// const [password, setPassword] = useState(' ')

// const verify = (text) =>{
//     if (text == ""){
//         alert('you has to fill all the fields!!')
//     }
// }

const Login = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View style={styles.areaInput}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="username"
                    // onChangeText={(verify)=>setUsername}
                    />
                <TextInput
                    style={styles.TextInput}
                    placeholder="password"
                    // onChangeText={(verify)=>setPassword}
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