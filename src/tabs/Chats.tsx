import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { ChatRoomStackParamList } from "../../navigation/types";
import Home from "../stacks/Home";
import ChatRoom from "../stacks/ChatRoom";

const Stack = createNativeStackNavigator<ChatRoomStackParamList>();

const Chats = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ChatRoom" component={ChatRoom} />
    </Stack.Navigator>
  );
};

export default Chats;
