import { View, Text } from 'react-native'
import React from 'react'
import useTheme from '@/hooks/useTheme';
import { useQuery } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { createHomeStyles } from '@/assets/styles/home.styles';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  const { toggleDarkMode, colors } = useTheme();

  const homeStyles = createHomeStyles(colors);

  const todos = useQuery(api.todos.getTodos)

  const completedTodos = todos ? todos.filter((todo) => todo.isCompleted).length : 0;
  const totalTodos = todos ? todos.length : 0;
  const progressPercentage = totalTodos > 0 ? Math.round((completedTodos / totalTodos) * 100) : 0;

  return (
    <View style={homeStyles.header}>
      <View style={homeStyles.titleContainer}>
        <LinearGradient
          colors={colors.gradients.primary}
          style={homeStyles.iconContainer}
        >
          <Ionicons name='flash-outline' size={28} color="#fff" onPress={()=> toggleDarkMode()} />
        </LinearGradient>

        <View style={homeStyles.titleTextContainer} >
          <Text style={homeStyles.title}>Todo&apos;s Tasks 👀</Text>
          <Text style={homeStyles.subtitle}>{completedTodos} of {totalTodos} completed</Text>
        </View>
      </View>

      <View style={homeStyles.progressContainer}>
        <View style={homeStyles.progressBarContainer}>
          <View style={homeStyles.progressBar}>
            <LinearGradient
              colors={colors.gradients.success}
              style={[homeStyles.progressFill, { width: `${progressPercentage}%` }]}
              
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Header