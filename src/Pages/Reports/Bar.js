import React from 'react';
import {View} from 'react-native';
import {ProgressBar} from 'react-native-multicolor-progress-bar';


const Bar = () => {
    return (
        <View>
            
<ProgressBar
arrayOfProgressObjects = {[
 {
   color: 'red',
   value: 0.4,
   nameToDisplay: "40%"
 },
 {
   color: 'blue',
   value: 0.6,
   opacity: 0.5
 },]}/>



        </View>
    );
}


export default Bar;
