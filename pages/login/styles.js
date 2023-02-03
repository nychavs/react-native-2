import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9971a8',
        flex: 1,
        display:'flex',
        alignItems: 'center'
    },
    areaInput:{
        marginTop:'80vw',
        backgroundColor:'#b79fcf',
        paddingRight: '3vw',
        paddingLeft:'3vw',
        paddingBottom:'2vw',
        paddingTop:'2vw',
        alignItems:"center",
        width:'80vw',
        borderRadius:'1vw'
    },
    TextInput: {
        borderRadius:'1vw',
        color: 'black',
        marginTop:'2vw',
        width: '90%',
        height: 50,
        backgroundColor:'white',
        textAlign: 'center'
    },
    button:{
        borderRadius:'1vw',
        backgroundColor:'purple',
        marginTop:'4vw',
        width:'30vw',
        height:'08vw',   
        textAlign:'center', 
        paddingTop:'1vw'
    },
})
export default styles