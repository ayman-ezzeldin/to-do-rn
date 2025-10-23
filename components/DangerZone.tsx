import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import useTheme from "@/hooks/useTheme";
import { createSettingsStyles } from "@/assets/styles/settings.styles";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

const DangerZone = () => {
  const { colors } = useTheme();

  const settingsStyles = createSettingsStyles(colors);

  const clearAllTodos = useMutation(api.todos.clearAllTodos);

const handleResetApp = async () => {
    Alert.alert(
      "Reset App",
      "⚠️ This will delete ALL your todos permanently. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete All",
          style: "destructive",
          onPress: async () => {
            try {
              const result = await clearAllTodos();
              Alert.alert(
                "App Reset",
                `Successfully deleted ${result.deletedCount} todo${result.deletedCount === 1 ? "" : "s"}. Your app has been reset.`
              );
            } catch (error) {
              console.log("Error deleting all todos", error);
              Alert.alert("Error", "Failed to reset app");
            }
          },
        },
      ]
    );
  };


  return (
    <LinearGradient
      colors={colors.gradients.surface}
      style={settingsStyles.section}
    >
      <Text style={settingsStyles.sectionTitleDanger}>Danger Zone</Text>

      <TouchableOpacity
        style={[settingsStyles.actionButton, { borderBottomWidth: 0 }]}
        activeOpacity={0.7}
        onPress={handleResetApp}
      >
        <View style={settingsStyles.settingLeft}>
          <LinearGradient
            colors={colors.gradients.danger}
            style={settingsStyles.actionIcon}
          >
            <Ionicons name="trash" size={18} color="#fff" />
          </LinearGradient>
          <Text style={settingsStyles.actionTextDanger}>Reset App</Text>
        </View>

            <Ionicons name="chevron-forward" size={18} color={colors.textMuted} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default DangerZone;
