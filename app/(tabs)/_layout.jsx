import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { TabBarIcon } from '@/components/ui/TabBarIcon';





export default function TabLayout() {
 

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ffffff',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {
            backgroundColor:"#000"
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Game',
          tabBarIcon: ({ color,focused }) => <TabBarIcon size={20} name={focused ? 'game-controller' : 'game-controller-outline'} color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: 'Chat',
          tabBarIcon: ({ color,focused }) => <TabBarIcon size={20} name={focused ? 'chatbox' : 'chatbox-outline'} color={color} />,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color, focused }) => <TabBarIcon size={20} name={focused ? 'newspaper' : 'newspaper-outline'} color={color} />,
        }}
      />
      
    </Tabs>
  );
}
