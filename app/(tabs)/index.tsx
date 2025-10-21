import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  const todos = useQuery(api.todos.getTodos)
  console.log("todos: ",todos)

  const addTodo = useMutation(api.todos.addTodo)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle dark mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> addTodo({text:"Ayman ezz"})}>
        <Text>Add a new todo</Text>
      </TouchableOpacity>
        
    </View>
  );
}
