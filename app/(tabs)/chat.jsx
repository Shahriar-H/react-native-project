import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StatusBar, ToastAndroid, Alert } from 'react-native';
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import {useRouter} from "expo-router"
import moment from "moment"
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

const ChatScreen = () => {
  const usersAvtar=[
    "https://media.istockphoto.com/id/1248267263/photo/they-respect-me-when-i-walk-onto-the-court.jpg?s=612x612&w=0&k=20&c=Mo1tOGaY728c4HoSS2R2rwcu5K8-W2jOQcUzJUmKebk=",
    "https://media.istockphoto.com/id/1329516858/photo/tennis-player-hold-racquet-and-throw-up-ball.jpg?s=612x612&w=0&k=20&c=jbpJ3SNASysNZVdANXFYCNBDiT6y7q0rbTtU2or2Ig0=",
    "https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg"
]
  const messages = [
    { id: '1', sender: 'Penn N. (panther)', text: 'Hey guys, thanks a lot for the impressive game, it was fun!', time: 1732950367814, isOwn: false,instant:true },
    { id: '2', sender: '', text: 'Hey guys, thanks a lot for the impressive game, it was fun!', time: 1732950367814, isOwn: false,instant:false },

    { id: '3', sender: 'Penn N. (panther)', text: 'Certainly, it was fantastic to see how long each point lasted. It’s always fun to play with players', time: 1732950367814, isOwn: false,instant:false },

    { id: '4', sender: 'Penn N. (panther)', text: 'The dedication of the ball was stunning.', time: 1732950367814, isOwn: false,instant:false },
    { id: '5', sender: 'Penn N. (panther)', text: 'The dedication of the ball was stunning.', time: 1732950367814, isOwn: true,instant:false },
    { id: '6', sender: 'Penn N. (panther)', text: "I'm crossing my fingers that the next game will be crazy!", time: 1732950367814, isOwn: true,instant:false },
  ];

  const router = useRouter()
  const focused = useIsFocused()
  const [message, setmessage] = useState('');
  const [allMessage, setallMessage] = useState(messages);
  const [sender, setsender] = useState("Shahriar");
  const [selecteduserAvatr, setselecteduserAvatr] = useState(null);
  const [image, setImage] = useState(null);


  const pickImage = async () => {
    // Request permission to access media library

    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission to access media library is required!');
      return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Only allow selecting images
      allowsEditing: true, // Enable cropping
      aspect: [4, 3], // Aspect ratio
      quality: 1, // Image quality (1 is the best)
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri); // Update state with the selected image URI
      console.log(result.assets[0].uri);
      
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('messages', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getDatasession = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('messages');
     
      
      if(jsonValue != null){
        const storedmessage = JSON.parse(jsonValue)
        setallMessage(storedmessage)
      }
    
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getDatasession()
    
  }, [focused]);


  const renderMessage = ({ item }) => (
    <View className={`flex-row items-end my-2 ${item.isOwn ? 'justify-end' : ''}`}>
      {!item.isOwn && (
        <Image
          source={{ uri: usersAvtar[item?.avater]?usersAvtar[item?.avater]:'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' }}
          className="h-10 w-10 rounded-full mr-2"
          style={{opacity:item?.instant?0:1}}
        />
      )}
      {!item.isOwn&&<View
        className={`p-3 rounded-lg border border-gray-100 ${'bg-white'}`}
        style={{ maxWidth: '70%',minWidth:'50%' }}
      >
        {(item.sender && !item.isOwn) && (
          <Text className="text-sm font-bold text-gray-800">{item.sender}</Text>
        )}
        {item?.media&&<Image className="w-full h-[100px]" source={{uri:item?.media}} />}
        <Text className={`${item.isOwn ? 'text-white' : 'text-gray-800'} text-sm`}>{item.text}</Text>
        <Text className={`text-xs mt-1 ${item.isOwn ? 'text-blue-200' : 'text-gray-400'}`}>
          {moment(item.time).format('lll') }
        </Text>
      </View>}

      {item.isOwn&&<LinearGradient 
        colors={['#004576', '#3093d5']} 
        start={{ x: 0, y: 3 }} 
        end={{ x: 1, y: 1 }} 
        className={`p-3 rounded-lg border border-gray-100 ${'bg-blue-500 text-white'}`}
        style={{ maxWidth: '70%', borderRadius:8, minHeight:70, minWidth:'50%' }}
      >
        {item.sender && !item.isOwn && (
          <Text className="text-sm font-bold text-gray-800">{item.sender}</Text>
        )}
        {item?.media&&<Image className="w-full h-[50px]" source={{uri:item?.media}} />}
        <Text className={`${item.isOwn ? 'text-white' : 'text-gray-800'} text-sm`}>{item.text}</Text>
        <Text className={`text-xs mt-1 ${item.isOwn ? 'text-blue-200' : 'text-gray-400'}`}>
            {moment(item.time).format('lll') }
        </Text>
        <Image resizeMode='contain' className="absolute bottom-0 h-5 w-5 -right-4 z-0"  source={require("../../assets/images/tillt.png")} />
      </LinearGradient>}

      {item.isOwn && (
        <Image
          source={{ uri: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg' }}
          className="h-10 w-10 rounded-full ml-2"
        />
      )}
    </View>
  );



  const onMessageHnalde = ()=>{
    if(!message){
        return ToastAndroid.show("Empty input", ToastAndroid.SHORT)
    }

    let getmessages = allMessage;
    getmessages.push({ id: new Date().getTime(), sender: sender, text: message, time: new Date().getTime(), isOwn: sender==='Shahriar'?true:false,instant:false, avater:selecteduserAvatr,media:image })
    storeData(getmessages)
    setallMessage(getmessages)
    setmessage('')
    setImage(null)
   
    
  }

  return (
    <View className="flex-1 bg-gray-50" style={{paddingTop:40}}>
      {/* Header */}
      <StatusBar barStyle={'dark-content'} />
      <TouchableOpacity onPress={()=>router.push("/")} className="flex-row items-center p-4 justify-end">
        <Text className="text-xl text-[#145E94]">
            Monday, February 23 | 14:00 - Tel Aviv 
        </Text>
        <Entypo name="chevron-right" size={20} color="#145E94" />
      </TouchableOpacity>
      <View className="flex-row items-center justify-between px-6 py-3 border-b border-gray-200 bg-white">
        <TouchableOpacity onPress={()=>router.push("/")}>
          <FontAwesome name="share-alt" size={20} color="black" />
        </TouchableOpacity>
        <View className="flex-row">
            <TouchableOpacity onPress={()=>{setsender("Shahriar");}} className="px-1 ">
                <Image
                resizeMode='cover'
                source={{ uri: "https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg" }}
                
                style={{height:40, width:40}}
                className={`${sender==='Shahriar'&&"border-2 border-red-500"} h-4 w-4 rounded-full mx-1`}
                />
                <View className="rounded-full absolute bottom-0 -right-2" style={{height:10, width:10, backgroundColor:'#02d730', bottom:5, right:5}}></View>
            </TouchableOpacity>
            {
                [1,2,3].map((item, index)=>(
                <TouchableOpacity onPress={()=>{setsender("Penn N"+item);setselecteduserAvatr(item-1)}} key={index} className="px-1">
                    <Image
                    resizeMode='cover'
                    source={{ uri: usersAvtar[item-1] }}
                    className={`${sender==="Penn N"+item&&"border-2 border-red-500"} h-4 w-4 rounded-full mx-1`}
                    style={{height:40, width:40}}
                    />
                    <View className="rounded-full absolute bottom-0 -right-2" style={{height:10, width:10, backgroundColor:'#02d730', bottom:5, right:5}}></View>
                </TouchableOpacity>
                ))
            }
            
            
        </View>
        <TouchableOpacity onPress={()=>router.push("/")}>
          <FontAwesome name="angle-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Chat messages */}
      <FlatList
        data={allMessage}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />

      {/* Input Bar */}
      <View className="flex-row items-center px-4 py-3 border-t border-gray-200 bg-white">
        <TouchableOpacity onPress={pickImage} className="mr-2">
          {!image&&<Entypo name="plus" size={25} color="#4ba0fa" />}
          {image&&<View>
            <Image source={{uri:image}} className="h-10 w-10 border rounded-sm" />
            </View>}
        </TouchableOpacity>
        <TextInput
          placeholder="message..."
          value={message}
          className="flex-1 bg-gray-100 px-4 py-4 rounded-full text-sm"
          onChangeText={setmessage}
        />
        <TouchableOpacity className="ml-3" onPress={onMessageHnalde}>
          <FontAwesome name="paper-plane" size={20} color="#4ba0fa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
