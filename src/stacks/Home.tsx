import React from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import { gStyles } from "../styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome5";
const Home = () => {
  return (
    <SafeAreaView style={gStyles.appContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTxt}>Hello Fateme</Text>
        <TouchableOpacity style={styles.badgetContainer}>
          <Icon name="bell" size={25} color="lightgray" />
          <View style={styles.badget}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.searchField}>
        <Icon name="search" size={25} color="lightgray" />
        <TextInput
          style={styles.input}
          cursorColor="gray"
          placeholderTextColor="lightgray"
          placeholder="Search"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: "500",
  },
  badgetContainer: {
    position: "relative",
  },
  badget: {
    position: "absolute",
    width: 10,
    height: 10,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "orangered",
    borderRadius: 10,
    right: 0,
  },
  searchField: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 15,
    backgroundColor: "#f8f8fb",
  },
  input: {
    flex: 1,
    paddingLeft: 10,
  },
});
export default Home;
