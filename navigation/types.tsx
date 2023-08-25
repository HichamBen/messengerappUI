import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import type {BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ChatRoomStackParamList = {
  ChatRoom: undefined;
  Home: undefined;
};

export type RootTabParamList = {
  Chats: NavigatorScreenParams<ChatRoomStackParamList>;
  Calls: undefined;
  Status: undefined;
  Contacts: undefined;
  Settings: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
BottomTabScreenProps<RootTabParamList, T>;

export type ChatRoomStackScreenProps<T extends keyof ChatRoomStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ChatRoomStackParamList, T>,
    RootTabScreenProps<keyof RootTabParamList>
  >;
