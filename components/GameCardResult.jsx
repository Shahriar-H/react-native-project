import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome,Fontisto } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const GameCardResult = ({ game }) => {

  
    return (
      <View className="bg-white border border-cardBorder overflow-hidden border-gray-300 rounded-lg my-3 mt-0 mb-8 shadow-sm">
        {/* Location and Date */}
        <View className="mb-5 border-b p-4 py-4 pt-2 border-gray-200">
          <View className='flex-row justify-between items-center w-[99%]'>
            <Text className="text-[16px] text-[#145E94]">{game?.location}</Text>
            <Entypo name="share" size={22} color="#7dbcea" />
          </View>
          <View className='flex-row'>
            <View className="flex-row items-center mt-1">
              <FontAwesome name="calendar" size={16} color="#145E94" />
              <Text className="mx-2 text-gray-600">{game?.date}</Text>
            </View>
            <View className="flex-row items-center mt-1">
              <FontAwesome name="clock-o" size={18} color="#145E94" />
              <Text className="mx-2 text-gray-600">{game?.time}</Text>
            </View>
            <View className="flex-row items-center mt-1">
              <FontAwesome name="comment-o" size={17} color="#145E94" />
              <Text className="mx-2 text-gray-600">{game?.messages} messages</Text>
            </View>
          </View>
        </View>
  
        {/* Players Row */}
        <View className="flex-row items-center p-4 justify-between overflow-hidden w-[100%] pb-8">


          <View className='flex-row items-center justify-between w-[40%] '>
            {game?.players.map((player, index) => (
              <View key={index} className="items-center">
                <View className='border p-[2px] flex justify-center items-center text-[#145E94] rounded-full border-[#145E94]'>
                  <Image source={{ uri: player?.avatar }} className="h-[57px] w-[57px] rounded-full" />
                  <Image className='absolute border border-gray-500 rounded-sm' style={{bottom:7, right:-3}} source={require("../assets/images/brazil.png")} />
                </View>
                <Text className="font-bold text-gray-700 text-sm">{player?.name}</Text>
                <Text className="text-gray-500 text-xs">{player?.nickname}</Text>
                
              </View>
            ))}
          </View>

          <View className=''>
            <Text className='text-xl font-bold p-1 pb-0 text-center text-[#145E94]'>1 - 3</Text>
            <Text className='text-xl font-bold p-1 pb-0 text-center text-[#145E94]'>1 - 0</Text>
            <Text className='text-xl font-bold p-1 pb-0 text-center text-[#145E94]'>2 - 0</Text>
          </View>
  
          {/* Placeholder for empty slots */}
          <View className='flex-row items-center justify-between w-[40%] '>
            {game?.oponents.map((player, index) => (
              <View key={index} className="items-center">
                <View className='border p-[2px] flex justify-center items-center text-[#145E94] rounded-full border-[#145E94]'>
                  <Image source={{ uri: player?.avatar }} className="h-[57px] w-[57px] rounded-full" />
                  <Image className='absolute border border-gray-500 rounded-sm' style={{bottom:7, right:-3}} source={require("../assets/images/brazil.png")} />
                </View>
                <Text className="font-bold text-gray-700 text-sm">{player?.name}</Text>
                <Text className="text-gray-500 text-xs">{player?.nickname}</Text>
                
              </View>
            ))}
          </View>
        </View>
  
        {/* Footer */}
        <View className="flex-row hidden  justify-between items-center mt-6 border-t border-gray-200">
          <View className='pl-4'>
            <View className='flex-row items-center '>
              <Fontisto name="blood-drop" size={16} color="#145E94" />
              <Text className="text-gray-500 ml-1">
                 {game?.precipitation}
              </Text>
            </View>

            <View className='flex-row items-center '>
              <Fontisto name="cloudy" size={16} color="#145E94" />
              <Text className="text-gray-500 ml-1">
                {game?.weather}
              </Text>
            </View>
          </View>
          <LinearGradient 
          colors={['#9ad2f9', '#003b65']} 
          start={{ x: 0, y: 2 }} 
          end={{ x: 1, y: 0 }} 
          className="bg-[#145E94] justify-center items-center w-[130px] h-[60px]">
            <Text className="text-[#ffffff] font-bold">Chat</Text>
          </LinearGradient>
        </View>
      </View>
    );
  };
  



export default GameCardResult;
