import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet,Image ,SafeAreaView,TouchableOpacity,StatusBar} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const COLORS = {primary: '#062156', white: '#fff'};

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [
  {
  
    id: '1',
    image: require('../assets/phone.png'),
    title: 'Daily Dividends',
    subtitle: 'Your asset gains on a daily with the best rate in the market, giving satisfaction to our clients for low risk securities.',
  },
  {
    id: '2',
    image: require('../assets/tree.png'),
    title: 'Compound Gains and High Returns',
    subtitle: 'SFS uses her expertise to calculate the interest on your asset which is compounded over time and maximising your returns.',
  },
  {
    id: '3',
    image: require('../assets/key.png'),
    title: 'Security First.',
    subtitle: 'The AA+ rated fund invests in Treasury bills, FGN Bonds and corporate institutions with minimum of A rating.',
  }
 
];


export default class OnboardingScreen extends Component {
  
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
        <View>
          <Image style={styles.logo} source ={require('../assets/logo.png')} />
        </View>
      <Text style={styles.welcome}>Welcome to {'\n'}SFS FUND</Text>
        <Carousel
          ref={(c) => this.carousel = c}
          data={DATA}
          loop={true}
          autoplay={true}
          renderItem={this._renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          containerCustomStyle={styles.carouselContainer}
          inactiveSlideShift={0}
          onSnapToItem={(index) => this.setState({ index })}
          useScrollView={true}          
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
       
  <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate
              ('LoginScreen')}}
                activeOpacity={0.8}
                style={[styles.btn,{
                    borderColor: COLORS.white,
                    borderWidth: 1,
                    backgroundColor:COLORS.primary,
                  },
                ]}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,
                    color: COLORS.white,
                  }}>
                  LOGIN
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{this.props.navigation.navigate
              ('RegisterScreen')}}
                activeOpacity={0.8}
                style={[styles.btn,{ borderColor: COLORS.primary,
                  borderWidth: 1,
                  backgroundColor: 'Transparent',}]}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 14,color:COLORS.primary
                  }}>
                  REGISTER
                </Text>
              </TouchableOpacity>
            </View>
       
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
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
    color:COLORS.primary,
    fontSize: 24
  },
  
  title: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    color:COLORS.primary
  },

  logo:{
    alignSelf:'center',
    justifyContent:'center',
    marginTop:67
  },

  welcome:{
   fontSize:31,
   alignSelf:'center' ,
   marginTop:20
  },

  image:{
    resizeMode:'contain'
  },

  subtitle:{
    fontSize:14,
    color:COLORS.primary,
    lineHeight:20,
    textAlign:'center',
    padding:20
  },

  btn: {
    flex: 1,
    height: 54,
    borderRadius: 5,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    margin:16,
    marginTop:100,
  
  },
});
