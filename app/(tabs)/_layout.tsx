import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs
      screenOptions={{}}
    >
      <Tabs.Screen name="index" options={{
        title: 'Todos',
        tabBarIcon:({color, size}) => (
          <Ionicons name='flash-outline' color={color} size={size} />
        )
      }} />
      
      <Tabs.Screen name="settings" options={{
        title: 'Settings',
        tabBarIcon:({color, size}) => (
          <Ionicons name='settings' color={color} size={size} />
        )
      }} />
      

    </Tabs>
  )
}

export default _layout