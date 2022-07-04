import React,{useState} from 'react';
import { render } from 'react-dom';
import {View,Image,TouchableOpacity,Text,StyleSheet, SafeAreaView,StatusBar,} from "react-native";
import CustomSwitchtwo from '../components/CustomSwitchthree';
import { Card } from 'react-native-paper';
import pending from '../assets/pending.png';

const COLORS = {primary: '#062156', white: '#fff',black:'#000D26'};

const data=[
    {
  
        id: '1',
       
        title: 'SFS FIXED INCOME FUND',
        namee: 'Peter Olugbenga',
        interest:'XX,XXX.XX',
        amount:'XX,XXX.XX',
        showP:'show password'
      },
      {
        id: '2',
       
        title: 'SFS FIXED INCOME FUND',
        namee: 'Peter Olugbenga',
        interest:'XX,XXX.XX',
        amount:'XX,XXX.XX',
        showP:'show password'
      },
]

function WithdrawScreen() {

  const [gamesTab, setGamesTab] = useState(1);
  
  const onSelectSwitch = value => {
    setGamesTab(value);
  };

        
    return (
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
           <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>  
        <View style={{marginTop:40}}>
            <Text style={{color:COLORS.primary, fontSize:25,marginLeft:15}}>Withdraw</Text>
            <Text style={{color:COLORS.black, fontSize:14,marginLeft:15,marginTop:5}}>Select an Investment to withdraw from</Text>
        </View>
        
        <View style={{marginTop:30}}>
                        <CustomSwitchtwo
                        selectionMode={1}
                        option1="Active Investment"
                        option2="Pending Withdrawal"
                        
                        onSelectSwitch={onSelectSwitch}
                    />
                    </View>
                <View>
                  <View>
                {gamesTab==1 && <><Text style={{ fontSize: 14, marginTop: 20,marginLeft:18}}>Active Investment</Text><View style={{ marginTop: 20, flexDirection: 'row' }}>
              <Image style={{ resizeMode: 'contain', marginLeft: 12 }} source={require('../assets/Wcard.png')} />
              <View style={{ position: 'absolute', flex: 1 }}>
                <Text style={{ color: COLORS.white, fontSize: 12, left: 30, top: 10 }}>SFS FIXED INCOME FUND</Text>
                <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 20, left: 30, top: 10 }}>Peter Olugbenga</Text>
                <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 25, left: 30, top: 10 }}>interest:690.06</Text>
                <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 40, left: 90, top: 10 }}>52,978.06</Text>
                <TouchableOpacity style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', marginTop: 40, height: 36, left: 30, borderRadius: 5 }}>
                  <Text style={{ color: COLORS.white, fontSize: 12, color: 'white', alignSelf: 'center' }}>WITHDRAW</Text>
                </TouchableOpacity>
              </View>
              <Image style={{ resizeMode: 'contain', marginLeft: 12 }} source={require('../assets/Wcard.png')} />
              <View style={{ position: 'absolute', flex: 1 }}>
                <Text style={{ color: COLORS.white, fontSize: 12, left: 240, top: 10 }}>SFS FIXED INCOME FUND</Text>
                <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 20, left: 240, top: 10 }}>Peter Olugbenga</Text>
                <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 25, left: 240, top: 10 }}>interest:690.06</Text>
                <Text style={{ color: COLORS.white, fontSize: 14, marginTop: 40, left: 300, top: 10 }}>52,978.06</Text>
                <TouchableOpacity style={{ backgroundColor: 'red', flex: 1, justifyContent: 'center', marginTop: 40, height: 36, left: 240, borderRadius: 5 }}>
                  <Text style={{ color: COLORS.white, fontSize: 12, color: 'white', alignSelf: 'center' }}>WITHDRAW</Text>
                </TouchableOpacity>
              </View>
            </View></>
                }
                </View>
                   {gamesTab==2 &&
                   <View>
                      <Text style={{ fontSize: 14, marginTop: 20,marginLeft:18}}>Pending Withdrawal Requests</Text>
                      <Card>
                          <View  style={styles.pendingwid}>
                               <View>
                                  <Image source={pending} alt='ted' style={{resizeMode:'contain',width:25}}/> 
                               </View>
                                <View>
                                 <Text>SFS FIXED INCOME FUND</Text>
                                 <Text>DS741P4CZ0</Text>
                                 <Text>Thur, 24th June, 2021  00:00 AM</Text>
                                </View>
                                <View>
                                <Text style={{color:'#BF2C2C'}}>₦ -5000.00</Text>
                                <Text>Unapproved</Text>
                                </View>
                          </View>
                      </Card>
                      <Card>
                          <View  style={styles.pendingwid}>
                               <View>
                                  <Image source={pending} alt='alt' style={{resizeMode:'contain',width:25}}/> 
                               </View>
                                <View>
                                 <Text>SFS FIXED INCOME FUND</Text>
                                 <Text>FS741U4CG7</Text>
                                 <Text>Thur, 30th June, 2021  01:00 AM</Text>
                                </View>
                                <View>
                                <Text style={{color:'#BF2C2C'}}>₦ -9000.00</Text>
                                <Text>Unapproved</Text>
                                </View>
                          </View>
                      </Card>
                   </View>
                   }
                   
                </View> 

            
        </SafeAreaView>
    );
   
}

export default WithdrawScreen;



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:30
       
    },
    buttonContainer: {
        flex: 1,
       justifyContent:'center',
        width:20,
        height:54,
        backgroundColor:'#0000004D',
        borderWidth:1,
        margin:2,
        alignSelf:'center',
        marginLeft:16,
      
    },
    buttonContainer2: {
        flex: 1,
       justifyContent:'center',
        width:20,
        height:54,
        backgroundColor:'transparent',
        borderWidth:1,
        marginRight:16,
       
    },
    pendingwid:{
     marginTop:20,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between'



    }
});



