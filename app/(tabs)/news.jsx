import React, { useState } from 'react';
import { View, Text, Image, ScrollView, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PagerView  from 'react-native-pager-view';
import Header from "../../components/Header"
import GameCardResult from '../../components/GameCardResult';

const gamesData = [
    {
      id: '1',
      location: 'Yarkon Park, Tel Aviv | Court #2',
      date: '02/24/2023',
      time: '14:00',
      messages: 26,
      players: [
        { name: 'Mandler T.', nickname: 'PRO', flag: '🇧🇷', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
        { name: 'Oz Y.', nickname: 'The Wiz', flag: '🇧🇷', avatar: 'https://media.istockphoto.com/id/1248267263/photo/they-respect-me-when-i-walk-onto-the-court.jpg?s=612x612&w=0&k=20&c=Mo1tOGaY728c4HoSS2R2rwcu5K8-W2jOQcUzJUmKebk=' },
      ],
      oponents: [
        { name: 'Mandler T.', nickname: 'PRO', flag: '🇧🇷', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
        { name: 'Oz Y.', nickname: 'The Wiz', flag: '🇧🇷', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
      ],
      precipitation: '25% Precipitation',
      weather: 'Weather - cloudy',
    },
    {
      id: '2',
      location: 'Yarkon Park, Tel Aviv | Court #1',
      date: '02/25/2023',
      time: '16:00',
      messages: 12,
      players: [
        { name: 'John D.', nickname: 'Ace', flag: '🇺🇸', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
        { name: 'Chris P.', nickname: 'Smash', flag: '🇬🇧', avatar: 'https://media.istockphoto.com/id/1248267263/photo/they-respect-me-when-i-walk-onto-the-court.jpg?s=612x612&w=0&k=20&c=Mo1tOGaY728c4HoSS2R2rwcu5K8-W2jOQcUzJUmKebk=' },
      ],
      oponents: [
        { name: 'Mandler T.', nickname: 'PRO', flag: '🇧🇷', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_ZuerwBh4elDEbfwC1K_5R8qSLgGfmlF8g-FQIYU3-7MEumTKDoJIxSwZ5b6spuH3HM&usqp=CAU' },
        { name: 'Oz Y.', nickname: 'The Wiz', flag: '🇧🇷', avatar: 'https://imageio.forbes.com/specials-images/imageserve/1161960426/Day-Thirteen--The-Championships---Wimbledon-2019/960x0.jpg?format=jpg&width=960' },
      ],
      precipitation: '10% Precipitation',
      weather: 'Weather - sunny',
    },
    {
      id: '3',
      location: 'Yarkon Park, Tel Aviv | Court #1',
      date: '02/25/2023',
      time: '16:00',
      messages: 12,
      players: [
        { name: 'John D.', nickname: 'Ace', flag: '🇺🇸', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
        { name: 'Chris P.', nickname: 'Smash', flag: '🇬🇧', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
      ],
      precipitation: '10% Precipitation',
      weather: 'Weather - sunny',
    },
  ];

const NewsScreen = ()=> {
    const [data, setdata] = useState([1, 2,3,4,6,7,8]);

    const renderItem = ({item,index})=>{
        
        
        return <><View key={item} className="items-start flex-row-reverse mb-8">
            <Image
            source={{
                uri: 'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg',
            }}
            className="w-20 h-20 rounded-lg"
            />
            <View className="mr-5 ml-1 flex-1 ">
            <Text className="text-xs font-bold text-[#145E94]">News</Text>
            <Text className="text-black font-semibold text-sm">
                Lorem Ipsum is a term for a completely meaningless text - sometimes read
            </Text>
            <View className="flex-row items-center mt-2">
                <FontAwesome name="clock-o" size={14} color="gray" />
                <Text className="text-gray-500 ml-2 text-sm">an hour ago</Text>
                <FontAwesome name="comment-o" size={14} color="gray" className="ml-4" />
                <Text className="text-gray-500 ml-2 text-sm">26 comments</Text>
            </View>
            </View>
        </View>
        {item%3===0&&<GameCardResult game={gamesData[1]} />}
        </>
    }
  return (
    <View className="flex-1 ">
      <Header name={'Shahriar Hussain'} id="a tennis player"/>
      {/* Main Pager Section */}
      <PagerView style={{ height: 220, }} className="border" initialPage={0}>
        {/* First Slide */}
        <View className="p-4">
          <Image
            source={{
              uri: 'https://www.shutterstock.com/image-photo/calm-weather-on-sea-ocean-600nw-2212935531.jpg',
            }}
            className="w-full h-[100%] rounded-lg"
          />
          <View className="absolute bottom-5 left-4 bg-[#00000063] w-full p-2 rounded-md">
            <Text className="text-white font-bold text-lg">
              Lorem Ipsum is a nickname for such a completely meaningless text - some
            </Text>
            <View className="flex-row items-center mt-1">
              <FontAwesome name="clock-o" size={14} color="white" />
              <Text className="text-white ml-2 text-sm">4 minutes of reading</Text>
            </View>
          </View>
        </View>
        {/* 2nd Slide */}
        <View className="p-4">
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Dw7-4lVfRq74_YEiPEt4e-bQ0_6UA2y73Q&s',
            }}
            className="w-full h-[100%] rounded-lg"
          />
          <View className="absolute bottom-5 left-4 bg-[#00000063] w-full p-2 rounded-md">
            <Text className="text-white font-bold text-lg">
              Lorem Ipsum is a nickname for such a completely meaningless text - some
            </Text>
            <View className="flex-row items-center mt-1">
              <FontAwesome name="clock-o" size={14} color="white" />
              <Text className="text-white ml-2 text-sm">4 minutes of reading</Text>
            </View>
          </View>
        </View>
      </PagerView>

      {/* //News Section */}
      <View className="h-[59%]">
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            style={{padding:16,paddingBottom:100}}
        />
        
      </View>
     
    </View>
  );
}

export default NewsScreen
