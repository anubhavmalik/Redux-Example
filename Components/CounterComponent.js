import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function CounterComponent() {
  const [text, setText] = useState(0);

  const changeCount = (num, shouldIncrement) => {
    if (shouldIncrement) {
      setText(++num);
    } else {
      setText(--num);
    }
  };

  const incrementCount = () => {
    changeCount(parseInt(text), true);
  };

  const decrementCount = () => {
    changeCount(parseInt(text), false);
  };

  return (
    <View style={styles.container} width="100%">
      <TouchableOpacity>
        <Text style={{ fontSize: 36 }} color="green" onPress={incrementCount}>
          +
        </Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 80 }}>{text}</Text>
      <TouchableOpacity>
        <Text style={{ fontSize: 36 }} color="red" onPress={decrementCount}>
          -
        </Text>
      </TouchableOpacity>
    </View>
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
  button: {
    flex: 1,
    fontSize: 36,
    borderColor: "black",
    borderWidth: 4,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  yolo: {
    flex: 1,
    flexWrap: "wrap",
    fontSize: 80,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
  touchables: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
