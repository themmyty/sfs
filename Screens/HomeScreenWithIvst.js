import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet,Image ,SafeAreaView,TouchableOpacity,StatusBar} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {feather} from 'react-native-vector-icons'


const COLORS = {primary: '#062156', white: '#fff'};

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.80);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [
  {
  
    id: '1',
    image: require('../assets/card.png'),
    title: 'SFS FIXED INCOME FUND',
    namee: 'Peter Olugbenga',
    interest:'XX,XXX.XX',
    amount:'XX,XXX.XX',
    showP:'show password'
  },
  {
    id: '2',
    image: require('../assets/card.png'),
    title: 'SFS FIXED INCOME FUND',
    namee: 'Peter Olugbenga',
    interest:'XX,XXX.XX',
    amount:'XX,XXX.XX',
    showP:'show password'
  },
  {
    id: '3',
    image: require('../assets/card.png'),
    title: 'SFS FIXED INCOME FUND',
    namee: 'Peter Olugbenga',
    interest:'XX,XXX.XX',
    amount:'XX,XXX.XX',
    showP:'show password'
  }
 
];


export default class HomeScreenWithIvst extends Component {
  
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    const {navigate}=this.props.navigation;
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>
      </View>
    );
  }
  
  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle = "dark-content" hidden = {false}  translucent = {true}/>
        <View>
          <Text style={{color:COLORS.primary,fontSize:25,marginTop:35,marginLeft:16}}>Hi Peter!</Text>
            <Image style={styles.Notificationicon} source ={require('../assets/notificationIcon.png')} />
        </View>
        <View>
            <Text style={{color:COLORS.primary,fontSize:14,marginBottom:15,marginLeft:16}}>Good Morning, Stay safe!</Text>
            <Text style={{color:'#5CAC6B',fontSize:14,marginTop:7,marginRight:20,alignSelf:'flex-end'}}>Today’s rate: 9.54%</Text>
            <Text style={{color:COLORS.primary,fontSize:12,marginTop:10,marginLeft:16}}>Active Investments</Text>
        </View> 
       <View>

          
          <Carousel
              ref={(c) => { this._carousel = c; }}
              data={DATA}
              renderItem={this._renderItem}
              sliderWidth={SLIDER_WIDTH -40}
              itemWidth={300}
              onSnapToItem={(index) => this.setState({ index })}
             
            />
        <Pagination
  dotsLength={DATA.length}
  activeDotIndex={this.state.index}

  dotStyle={{
    width: 60,
    height: 6,
    borderRadius: 5,
    marginHorizontal: -2,
    backgroundColor: 'rgba(0, 0, 0, 0.92)',
    
  }}
  inactiveDotOpacity={0.4}
  inactiveDotScale={0.9}
  tappableDots={true}
/>
  <View>

  </View>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

  Notificationicon:{
    alignSelf:'flex-end',
    width:26,
    height:26,
    bottom:7,
    marginRight:50,
    position:'absolute'
    },

  carouselContainer: {
    marginTop: 20
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20

  },
  itemLabel: {
    color:COLORS.white,
    fontSize: 24
  },
  
  title: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color:COLORS.white
  },

  logo:{
    alignSelf:'center',
    justifyContent:'center',
    marginTop:67
  },

  

  image:{
    resizeMode:'center',
   
   
  },

  subtitle:{
    fontSize:14,
    color:COLORS.white,
    lineHeight:20,
    textAlign:'center',
    padding:20
  },

});
