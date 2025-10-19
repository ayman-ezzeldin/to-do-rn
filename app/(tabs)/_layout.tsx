import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#1e293b',
          borderTopWidth: 1,
          borderTopColor: "gray",
          height: 72,
          paddingTop: 10
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: "600"
        },
        headerShown: false
      }}
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