import React, { Component } from 'react';
import { Button, View, StyleSheet ,TouchableOpacity,Text, Image} from 'react-native';

export default class GridView extends Component {

   render() {
        return (
            <View style={styles.container}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity > 
                  <Text style={{alignSelf:'center',color:'#062156',fontSize:14,marginRight:27}}>Google</Text>
                  <Image  style={styles.googleLogo} source={require('../assets/googleLogo.png')}/>
                </TouchableOpacity >
                 </View>
              
                <View style={styles.buttonContainer}>
               <TouchableOpacity >
                  <Text style={{alignSelf:'center',color:'#062156',fontSize:14,marginRight:27}}>Linkedin</Text>
                  <Image  style={styles.LinkedinLogo}  source={require('../assets/LinkedinIcon.png')}/>
                </TouchableOpacity >
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:40
       
    },
    buttonContainer: {
        flex: 1,
         backgroundColor:'transparent',
         justifyContent:'space-around',
         height:54,
         margin:16,
         borderColor:'gray',
         borderWidth:1,
         borderRadius:5
    },
    googleLogo:{
        position:'absolute',
        left:100,
        top:-5
    },

    LinkedinLogo:{
        position:'absolute',
        left:105,
        top:-5
    }
});
