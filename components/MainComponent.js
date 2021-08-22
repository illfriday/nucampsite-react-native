import React, { Component } from "react";
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
      </View>
    );
  }
}
