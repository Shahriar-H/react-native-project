import React, { useState } from 'react';
import { View, Text, FlatList,Platform , Image, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { FontAwesome,Entypo } from '@expo/vector-icons';
import GameCard from '../../components/GameCard'
import Header from '../../components/Header'
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'

const gamesData = [
  {
    id: '1',
    location: 'Yarkon Park, Tel Aviv | Court #2',
    date: '02/24/2023',
    time: '14:00',
    messages: 26,
    players: [
      { name: 'Mandler T.', nickname: 'PRO', flag: '🇧🇷', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs_ZuerwBh4elDEbfwC1K_5R8qSLgGfmlF8g-FQIYU3-7MEumTKDoJIxSwZ5b6spuH3HM&usqp=CAU' },
      { name: 'Oz Y.', nickname: 'The Wiz', flag: '🇧🇷', avatar: 'https://imageio.forbes.com/specials-images/imageserve/1161960426/Day-Thirteen--The-Championships---Wimbledon-2019/960x0.jpg?format=jpg&width=960' },
    ],
    precipitation: '25% Precipitation',
    weather: 'Weather - cloudy',
  },
  {
    id: '2',
    location: 'Libion Zak, Tel Aviv | Court #1',
    date: '02/25/2023',
    time: '16:00',
    messages: 12,
    players: [
      { name: 'John D.', nickname: 'Ace', flag: '🇺🇸', avatar: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' },
      { name: 'Chris P.', nickname: 'Smash', flag: '🇬🇧', avatar: 'https://media.istockphoto.com/id/1248267263/photo/they-respect-me-when-i-walk-onto-the-court.jpg?s=612x612&w=0&k=20&c=Mo1tOGaY728c4HoSS2R2rwcu5K8-W2jOQcUzJUmKebk=' },
    ],
    precipitation: '10% Precipitation',
    weather: 'Weather - sunny',
  },
  {
    id: '3',
    location: 'Phramean Boom, Tel Aviv | Court #3',
    date: '02/25/2023',
    time: '16:00',
    messages: 12,
    players: [
      { name: 'John D.', nickname: 'Ace', flag: '🇺🇸', avatar: 'https://imageio.forbes.com/specials-images/imageserve/1161960426/Day-Thirteen--The-Championships---Wimbledon-2019/960x0.jpg?format=jpg&width=960' },
      { name: 'Chris P.', nickname: 'Smash', flag: '🇬🇧', avatar: 'https://media.istockphoto.com/id/1248267263/photo/they-respect-me-when-i-walk-onto-the-court.jpg?s=612x612&w=0&k=20&c=Mo1tOGaY728c4HoSS2R2rwcu5K8-W2jOQcUzJUmKebk=' },
    ],
    precipitation: '10% Precipitation',
    weather: 'Weather - sunny',
  },
];

const Index = () => {
  const renderGameCard = ({ item }) => <GameCard game={item} />;
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState('date'); // 'date' or 'time'

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(false); // Close the picker
    setDate(currentDate); // Update the state
  };

  const showMode = (currentMode) => {
    setMode(currentMode); // Set the picker mode (date or time)
    setShowPicker(true); // Show the picker
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <StatusBar barStyle={'dark-content'} />
      <Header name={'Shahriar Hussain'} id="a tennis player"/>

      {/* Filter Dropdown */}
      <View className="px-4 py-2 shadow-sm flex-row justify-between items-center">
        <TouchableOpacity onPress={() => showMode('date')} className="flex-row items-center py-4">
          <Image className='h-[35px] w-[35px]' resizeMode='contain' source={require("../../assets/images/filter.png")} />
          <View className="ml-2 flex justify-between flex-row items-center text-gray-700 bg-white py-2 px-7 rounded-full w-[250px]">
            <Text >{date?moment(date).format('lll'):'Date | Hour...'}</Text>
            <FontAwesome name='chevron-down' />
          </View>
        </TouchableOpacity>
      </View>

      {/* Show Picker */}
      {showPicker && (
        <DateTimePicker
          value={date} // The current date/time
          mode={mode} // 'date' or 'time'
          is24Hour={true} // Use 24-hour format
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChange} // Handle date/time changes
        />
      )}

      {/* Doubles Games Label */}
      <View className="px-4 my-1 pb-3">
        <Text className="text-[#145E94] rounded-full border-[#145E94] text-center p-2 border w-[150px] font-semibold">Doubles games</Text>
      </View>

      {/* Game Cards */}
      <FlatList
        data={gamesData}
        renderItem={renderGameCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16, paddingTop:0 }}
      />
    </SafeAreaView>
  );
};

export default Index
