import Login from "./pages/login";
import Home from "./pages/home";
import Screen1 from "./pages/screen1";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()

function Routers(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Screen1' component={Screen1}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Routers