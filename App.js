import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import CounterComponent from "./Components/CounterComponent";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <CounterComponent />
      </Provider>
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
