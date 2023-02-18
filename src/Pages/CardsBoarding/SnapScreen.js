

import React, { useState, useRef } from 'react';
import { Text, View, Dimensions, Image, SafeAreaView, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import COLORS from '../../const/Colors';
import styles from './style';


export const SLIDER_WIDTH = Dimensions.get('window').width + 10;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);


const { width, height } = Dimensions.get('window');


const Data = [
  {
    id: '1',
    url: require("../../Images/BoardScreen/Illustration.png"),
    title: 'Organize Your Money',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    url: require("../../Images/boarding.png"),
    title: 'Safe & Secure',
    subtitle: 'Lorem ipsum dolor sit',
  },
  {
    id: '3',
    url: require("../../Images/BoardScreen3/borading3.png"),
    title: 'Planning Autopilot',
    subtitle: 'Lorem ipsum dolor sit amet elit',
  },
];


const SnapScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const isCarousel = useRef(null);



  const skip = () => {
    const lastSlideIndex = Data.length - 1;
    const offset = lastSlideIndex * width;
    setCurrentSlideIndex(offset);
  };


  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          //  borderWidth: 2,
          elevation: 5,
          borderRadius: 20,
          alignItems: 'center',
          backgroundColor: COLORS.white,
          flex: 0.8
        }}>
        <Image source={item.url} style={{ width: 330, flex: 0.5, marginTop: 100 }} resizeMode='contain' />
      </View>
    );
  };


  return (
    <SafeAreaView style={{ flex: 1, }}>
      <ImageBackground source={require("../../Images/Shape/Shape.png")} resizeMode='cover' style={styles.image}>
        <View style={{ flex: 0.8, }}>
          <View style={{ height: height * 0.8, marginLeft: 5, }}>
            <Carousel
              layout={'stack'} layoutCardOffset={18}
              ref={isCarousel}
              data={Data}
              renderItem={renderItem}
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              carouselRef={isCarousel}
              onSnapToItem={(index) => { setCurrentSlideIndex(index) }} />
          </View>
        </View>

        <View style={styles.viewtext}>
          <Text style={styles.text}>{currentSlideIndex == 0 ? "Organize Your Money" : currentSlideIndex == 1 ? "Safe & Secure" : "Planning Autopilot"}</Text>
          <Text style={styles.text1}>{currentSlideIndex == 0 ? "Lorem ipsum dolor sit amet,consectetur adipiscing elit" : currentSlideIndex == 1 ? "Lorem ipsum dolor sit" : "Lorem ipsum dolor sit amet elit"}</Text>
        </View>

        <View style={styles.viewbtn}>
          <TouchableOpacity activeOpacity={0.8} style={styles.btn}
            onPress={() => {
              if (currentSlideIndex < 2) {
                isCarousel.current.snapToItem(currentSlideIndex + 1)
              } else {
                navigation.navigate("Welcome")
              }
            }}>
            <Text style={styles.nextbtn}>{currentSlideIndex == 2 ? "Finish" : "Next"}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}
            onPress={(title) => skip(navigation.navigate("Welcome"))}>
            <Text style={styles.skipbtn}>SKIP</Text>
          </TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}




export default SnapScreen;



