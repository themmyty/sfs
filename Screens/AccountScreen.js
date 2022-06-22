import React from 'react';
import{ StyleSheet,Text,View,FlatList,Image,TouchableOpacity} from 'react-native';


const COLORS = {primary: '#062156', white: '#fff'};

const DATA = [
{
	id:"1",
    Image:"../assets/Account",
	title:"Data Structures",
    Image:"../assets\next.png"
},
{
	id:"2",
	title:"STL"
},
{
	id:"3",
	title:"C++"
},
{
	id:"4",
	title:"Java"
},
{
	id:"5",
	title:"Python"
},
{
	id:"6",
	title:"CP"
},
{
	id:"7",
	title:"ReactJs"
},
{
	id:"8",
	title:"NodeJs"
},
{
	id:"9",
	title:"MongoDb"
},
{
	id:"10",
	title:"ExpressJs"
},
{
	id:"11",
	title:"PHP"
},
{
	id:"12",
	title:"MySql"
},
];

const Item = ({title}) => {
return(
	<View style={styles.item}>
	<Text style={{fontSize:16,}}>{title}</Text>
	</View>
);

}

export default function AccountScreen() {
	

const renderItem = ({item})=>(
<Item title={item.title}/>
);
return (
    <View> 
    <View style={styles.container}>
<View style={{marginLeft:16,marginTop:50}}>
<Text style={{fontSize:25,color:COLORS.primary}}>My Account</Text>
<Text style={{fontSize:14,color:COLORS.primary}}>Peter Olugbenga</Text>
</View>
<View >
<Image source={require('../assets/Account.png')}/>
</View>
</View>
<Text style={{color:'gray'}}>Account Services</Text>
<View style={styles.contain}>
	<FlatList
	data={DATA}
	renderItem={renderItem}
	keyExtractor={item => item.id}
	/>
</View>
</View>
);
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:50
        },

contain: {
	marginTop:30,
	padding:2,
   
},
item: {
	
	padding: 20,
	marginVertical: 8,
	marginHorizontal: 16,
    borderBottomWidth:2
},
});
