import Icon from "react-native-vector-icons/FontAwesome5";
import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from "@react-navigation/bottom-tabs";
import type { RootTabParamList, RootTabScreenProps } from "./navigation/types";
import Chats from "./src/tabs/Chats";
import Calls from "./src/tabs/Calls";
import Contacts from "./src/tabs/Contacts";
import Settings from "./src/tabs/Settings";
import Status from "./src/tabs/Status";
import { Text } from "react-native";
import { useLayoutEffect } from "react";

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={<T extends keyof RootTabParamList>({
          route,
          navigation,
        }: RootTabScreenProps<T>): BottomTabNavigationOptions => {
          return {
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarIcon: (props: {
              focused: boolean;
              color: string;
              size: number;
            }) => {
              if (route.name === "Chats") {
                return props.focused ? (
                  <View style={styles.fousedTabBarIcon}>
                    <Text style={styles.TabBarIconTitle}>Chats</Text>
                    <Icon name="dot-circle" color={props.color} size={10} />
                  </View>
                ) : (
                  <Icon
                    name="rocketchat"
                    color={props.color}
                    size={props.size}
                  />
                );
              } else if (route.name === "Calls") {
                return props.focused ? (
                  <View style={styles.fousedTabBarIcon}>
                    <Text style={styles.TabBarIconTitle}>Calls</Text>
                    <Icon name="dot-circle" color={props.color} size={10} />
                  </View>
                ) : (
                  <Icon name="phone" color={props.color} size={props.size} />
                );
              } else if (route.name === "Status") {
                return (
                  <TouchableOpacity onPress={() => navigation.jumpTo("Status")}>
                    <Icon
                      style={{
                        backgroundColor: "#187afa",
                        padding: 12,
                        borderRadius: 25,
                      }}
                      name="pen"
                      color="white"
                      size={20}
                    />
                  </TouchableOpacity>
                );
              } else if (route.name === "Contacts") {
                return props.focused ? (
                  <View style={styles.fousedTabBarIcon}>
                    <Text style={styles.TabBarIconTitle}>Contacts</Text>
                    <Icon name="dot-circle" color={props.color} size={10} />
                  </View>
                ) : (
                  <Icon name="users" color={props.color} size={props.size} />
                );
              }
              return props.focused ? (
                <View style={styles.fousedTabBarIcon}>
                  <Text style={styles.TabBarIconTitle}>Chats</Text>
                  <Icon name="dot-circle" color={props.color} size={10} />
                </View>
              ) : (
                <Icon name="cog" color={props.color} size={props.size} />
              );
            },

            tabBarStyle: {
              height: 80,
              elevation: 0,
              shadowOffset: {
                width: 0,
                height: 0,
              },
              shadowColor: "white",
              shadowOpacity: 0,
              shadowRadius: 0,
            },
            tabBarIconStyle: {
              fontSize: 35,
            },

            tabBarBackground: () => <View style={styles.tabBarContainer} />,
            tabBarShowLabel: false,
          };
        }}
      >
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Calls" component={Calls} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Contacts" component={Contacts} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: "white",
    width: "100%",
    height: "100%",
  },
  fousedTabBarIcon: {
    alignItems: "center",
  },
  TabBarIconTitle: {
    fontWeight: "bold",
    fontSize: 12,
    marginBottom: 5,
    color: "#187afa",
  },
});
