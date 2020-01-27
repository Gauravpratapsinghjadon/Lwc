import React  from 'react';
import { View ,Text, StyleSheet, TextInput} from 'react-native'
 
export default class Home extends React.Component{
     constructor(props){
         super(props);
         this.state={

         }
     }
     render(){
         return(<View style={styles.container}>
             <View  style={styles.header}>
             <Text style={styles.headerText}>Hello new Screen</Text>
             </View>
             <View style={styles.inputFieds} >
              <View style={styles.textinputouter}>
                   <TextInput style={styles.input}></TextInput>
              </View>
              <View style={styles.textinputouter1}>

              </View>
              <View style={styles.textinputouter2}>
                   <TextInput style={styles.input}></TextInput>
              </View>
             </View>
         </View>)
     }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    header:{
      backgroundColor:"skyblue",
      height:110,
      alignItems:"center",
      top:20
    },
    headerText:{
        top:40,
        fontSize:20,
        color:"blue"
    },
    inputFieds:{
        flex:1,
        width:'100%',
        maxHeight:400,
        backgroundColor:"white"
    },
    textinputouter:{
        backgroundColor:"red",
        flex:1,
        alignItems:"center"
    },
    textinputouter1:{
        backgroundColor:"white",
        flex:2,
        alignItems:"center"
    },
    textinputouter2:{
        backgroundColor:"red",
        flex:1,
        alignItems:"center"
    },
    input:{
        borderBottomColor:"yellow",
        borderRadius:5,
        backgroundColor:"white",
        width:'70%',
        borderRightWidth:4,
        borderLeftColor:"blue",
        top:30
    }
})