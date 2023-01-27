import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#9971a8',
        flex: 1,
        display:'flex',
        alignItems: 'center'
    },
    areaInput:{
        marginTop:'70vw',
        backgroundColor:'#b79fcf',
        paddingRight: '2vw',
        paddingLeft:'2vw',
        paddingBottom:'2vw',
        paddingTop:'2vw',
        alignItems:"center",
        width:'90vw'
    },
    TextInput: {
        borderRadius:'1vw',
        color: 'black',
        marginTop:'2vw',
        width: '100%',
        height: 50,
        selectionColor: '#b281e3',
        underlineColorAndroid: '#b281e3',
        backgroundColor:'white'
    },
    button:{
        borderRadius:'1vw',
        backgroundColor:'purple',
        marginTop:'4vw',
        width:'30vw',
        height:'08vw',   
        alignItems:'center'
    }
})
export default styles