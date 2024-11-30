import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Header = ({name,id}) => {
    return (
    <View className="bg-gray-900 p-4 flex-row items-center pt-12 pb-5" style={{elevation:4}}>
        <Image
          source={{uri:'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg'}}
          className="h-[55px] w-[55px] mr-3 rounded-full border-2 border-gray-600"
        />
        <View>
          <Text className="text-white font-bold ">{name}</Text>
          <Text className="text-gray-400 -mt-1">{id}</Text>
        </View>
        
    </View>
    );
}



export default Header;
