import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { CounterComponent } from "./Components/CounterComponent";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CounterComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: "row",
    backgroundColor: "white",
    flexWrap: "nowrap",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "space-around",
  },
});
