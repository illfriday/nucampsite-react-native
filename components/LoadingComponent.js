import React from "react";
import { ActivityIndicator, StyleSheet, View, Text } from "react-native";

function LoadingComponent() {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator size="large" color="#5637DD" />
      <Text style={styles.loadingText}>Loading . . .</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  loadingText: {
    color: "#5637DD",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default LoadingComponent;
