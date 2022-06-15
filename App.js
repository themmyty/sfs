import React, { Component } from 'react';
import { Text, View, Dimensions, StyleSheet, Image, SafeAreaView,} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
 



const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.95);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

const DATA = [
  {
    
    id: '1',
    image: require('./assets/phone.png'),
    title: 'Daily Dividends',
    subtitle: 'Your asset gains on a daily with the best rate in the market, giving satisfaction to our clients for low risk securities.',
  },
  {
    id: '2',
    image: require('./assets/tree.png'),
    title: 'Compound Gains and High Returns',
    subtitle: 'SFS uses her expertise to calculate the interest on your asset which is compounded over time and maximising your returns.',
  },
  {
    id: '3',
    image: require('./assets/key.png'),
    title: 'Security First.',
    subtitle: 'The AA+ rated fund invests in Treasury bills, FGN Bonds and corporate institutions with minimum of A rating.',
  }
  
];


export default class App extends Component {
  
  state = {
    index: 0
  }

  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this)
  }

  _renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image style={styles.image}>{item.image}</Image>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.subtitle}>{item.subtitle}</Text>

      </View>
    );
  }
  
render() {
  <SafeAreaView>
    <View>
      <Image />
    </View>
     <View>
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
    backgroundColor: 'rgba(0, 0, 0, 0.92)'
  }}
  inactiveDotOpacity={0.4}
  inactiveDotScale={0.9}
  tappableDots={true}
/>
       
      </View>
  </SafeAreaView>
     
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 30
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue'
  },
  itemLabel: {
    color: 'white',
    fontSize: 24
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  title: {
    marginTop: 50,
    fontStyle: "italic",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center"
  }
});
