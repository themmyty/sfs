import React from 'react';
import {SafeAreaView,Text,StatusBar,View,Image,StyleSheet,TouchableOpacity,ScrollView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Card } from 'react-native-paper';

const COLORS = {primary: '#062156', white: '#fff'};

function HomeScreenWithoutIvst() {
return (
<SafeAreaView style={{flex: 1, backgroundColor:COLORS.white}}>
<ScrollView>
<StatusBar barStyle = "dark-content" hidden = {false} translucent = {true}/>
<View>
<Text style={{color:COLORS.primary,fontSize:25,marginTop:40,marginLeft:16}}>Hi Peter!</Text>
<Image style={styles.Notificationicon} source ={require('../assets/notificationIcon.png')} />
</View>
<View>
<Text style={{color:COLORS.primary,fontSize:14,marginTop:5,marginLeft:16}}>Good Morning, Stay safe!</Text>
<Text style={{color:'#5CAC6B',fontSize:14,marginTop:7,marginRight:20,alignSelf:'flex-end'}}>Today’s rate: 9.54%</Text>
<Text style={{color:COLORS.primary,fontSize:12,marginTop:10,marginLeft:16}}>Active Investments</Text>
</View>
<View>
<Card style={{marginLeft:16,marginRight:16,marginTop:20}}> 
<TouchableOpacity>
<Image style={styles.PlusIcon} source ={require('../assets/PlusIcon.png')} />
</TouchableOpacity>
<Text style={{marginTop:8,alignSelf:'center',color:COLORS.primary,fontSize:14}} >You have no confirmed subscription plan</Text>
<FontAwesome style={styles.warning} name="warning" size={13} color="black" />
<Text style={{marginTop:8,alignSelf:'center',color:'#000D26',fontSize:12}}>Ledger Investments take 24-48 hours to activate</Text>
</Card>
</View>
<View style={styles.container}>
<View style={styles.buttonContainer}>
<TouchableOpacity > 
<Text style={{alignSelf:'center',color:'#062156',fontSize:14}}>Calculate</Text>
</TouchableOpacity >
</View>
<View style={styles.buttonContainer}>
<TouchableOpacity >
<Text style={{alignSelf:'center',color:'#062156',fontSize:14}}>Virtual Account Request</Text>
</TouchableOpacity >
</View>
</View>
<View>
<TouchableOpacity style={{flexDirection:'row',marginTop:50}}>
<Image style={styles.inviteIcon} source={require('../assets/invite.png')} />
<Text style={{alignSelf:'center',fontSize:20,color:COLORS.primary,marginLeft:25,bottom:20}}>Invite friends and family.</Text>
<Image style={{marginRight:16,width:15,height:15,left:60,top:20}} source={require('../assets/cancle.png')} />
</TouchableOpacity>
</View>
<View>
<Text style={{alignSelf:'center',bottom:30,right:25}}>And earn ₦1,000 bonus for {'\n'}every referral.</Text>
</View>
<View>
<Text style={{color:COLORS.primary,fontSize:14,marginTop:30,marginLeft:16}}>Transaction</Text>
</View>
<View>
<Image style={styles.phoneImg} source={require('../assets/phoneImg.png')} />
</View>
<View>
<Text style={styles.TransText}>Every transaction you make or receive{'\n'} will show up here</Text>
</View>
</ScrollView>
</SafeAreaView>
);
}

export default HomeScreenWithoutIvst;

const styles = StyleSheet.create({
Notificationicon:{
alignSelf:'flex-end',
width:26,
height:26,
bottom:32,
marginRight:24
},
PlusIcon:{
alignSelf:'center',
marginTop:49
},
warning:{
color:COLORS.primary,
top:21,
left:40
},
container: {
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
marginTop:22
},
buttonContainer: {
flex: 1,
backgroundColor:'transparent',
justifyContent:'space-around',
height:54,

borderColor:'gray',
borderWidth:1,
borderRadius:5,
margin:10
},
inviteIcon:{
resizeMode:'contain',
marginLeft:16,

}, 
phoneImg:{
resizeMode:'contain',
alignSelf:'center',
},
TransText:{
fontSize:14,
color:COLORS.primary,
lineHeight:20,
textAlign:'center',
padding:20

}
})
