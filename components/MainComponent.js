import React, { Component } from "react";
<<<<<<< Updated upstream
import { View } from "react-native";
import { CAMPSITES } from "../shared/campsites";
import Directory from "./DirectoryComponent";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
    };
  }
  render() {
    return (
      <View>
        <Directory campsites={this.state.campsites} />
=======
import { View, Platform } from "react-native";
import CampsiteInfo from "./CampsiteInfoComponent";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Constants from "expo-constants";
import Directory from "./DirectoryComponent";

const DirectoryNavigator = createStackNavigator(
  {
    Directory: { screen: Directory },
    CampsiteInfo: { screen: CampsiteInfo },
  },
  {
    initialRoute: "Directory",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#5637DD",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        color: "#fff",
      },
    },
  }
);

const AppNavigator = createAppContainer(DirectoryNavigator);

export default class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
>>>>>>> Stashed changes
      </View>
    );
  }
}
