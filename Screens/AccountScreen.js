import React from 'react';
import{ StyleSheet,Text,View,FlatList,Image,ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toggles from '../components/Toggles'



const COLORS = {primary: '#062156', white: '#fff'};

const DATA = [
{
	id:"1",
    image:require ('../assets/accountdetaild.png'),
	title:"Account Details",
    imageicon:require('../assets/next.png')
},
{
	id:"2",
    image:require ('../assets/acctbalance.png'),
	title:"Show Investment Balance",
    imageicon:'',
    
    
},{
	id:"3",
    image:require ('../assets/standingorder.png'),
	title:"Standing Orders",
    imageicon:require('../assets/next.png')
},
{
	id:"4",
    image:require('../assets/accttype.png'),
	title:"Manage Account Types",
    imageicon:require('../assets/next.png')
},
{
	id:"5",
    image:require('../assets/feedback.png'),
	title:"Feedback",
    imageicon:require('../assets/next.png')
},
{
	id:"6",
    image:require('../assets/newaccount.png'),
	title:"Open New Account",
    imageicon:require('../assets/next.png')
},
{
	id:"7",
    image: require('../assets/referral.png'),
	title:"Referrals",
    imageicon:require('../assets/next.png')
},
{
	id:"8",
    image:require('../assets/help.png'),
	title:"Help & Support",
    imageicon:require('../assets/next.png')
},
{
	id:"9",
    image:require('../assets/signout.png'),
	title:"Sign out",
   
},

];



export default function AccountScreen() {
	

const renderItem = ({item})=>(
	<View style={{borderBottomWidth:1,height:45,margin:16}}>
		<TouchableOpacity>
		<Image style={styles.image} source={item.image} />		
		<Text style={styles.item}>{item.title}</Text>
		{item.imageicon==''?<View style={styles.imageicon}><Toggles/></View>:<Image style={styles.imageicon} source={item.imageicon} />}
		</TouchableOpacity>
	</View>


);
return (
	<SafeAreaView style={{flex:1}}>
	<ScrollView>
    <View> 
    <View style={styles.container}>
<View style={{marginLeft:16,marginTop:54}}>
<Text style={{fontSize:25,color:COLORS.primary}}>My Account</Text>
<Text style={{fontSize:14,color:COLORS.primary,marginTop:4}}>Peter Olugbenga</Text>
</View>
<View >
<Image style= {styles.acctImage}source={require('../assets/Account.png')}/>
</View>
</View>
<TextInput style = {styles.input}
               placeholder = "Account Services"
               placeholderTextColor = "gray"
               autoCapitalize = "none"/>
<View style={styles.contain}>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	/>
</View>
	<View>
		<Text style={{alignSelf:'center',fontSize:14,color:'gray'}}> {'\u00A9'}Copyright 2022. All right reserved SFS</Text>
	</View>
</View>
</ScrollView>
</SafeAreaView>
);
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50
        },

		acctImage:{
		top:40,
		width:70,
		height:70

		},

		input:{
			margin: 16,
     		borderBottomWidth: 1,
     		borderColor:'gray' ,
			fontSize:14,
			marginTop:55,
			
		},

	contain: {
	marginTop:30,
	padding:2,
   
},
	item: {
	fontSize:15,
	padding: 1,
	marginLeft:62,
	marginHorizontal:8,
	marginVertical:-30,
	
	

    
},

	image:{
		resizeMode:'contain',
		width:40,
		height:40

	},

	imageicon:{
		alignSelf:'flex-end',
		width:25,
		height:25,
		top:8
		
	},

	toggles:{
		alignItems:'flex-end'
	}

});
