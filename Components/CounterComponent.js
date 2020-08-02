import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

class CounterComponent extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <View style={styles.container} width="100%">
        <TouchableOpacity>
          <Text
            style={styles.yolo}
            color="green"
            onPress={() => this.props.increaseCounter()}
          >
            Increase
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 80 }}>{this.props.counter}</Text>
        <TouchableOpacity>
          <Text
            style={styles.yolo}
            color="red"
            onPress={() => this.props.decreaseCounter()}
          >
            Decrease
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: "INCREASE_COUNTER" }),
    decreaseCounter: () => dispatch({ type: "DECREASE_COUNTER" }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);

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
    fontSize: 18,
    color: "black",
  },
  touchables: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
