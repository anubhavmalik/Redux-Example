import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";

class CounterComponent extends Component {
  state = {
    counter: 0,
  };

  incrementCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCount = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <View style={styles.container} width="100%">
        <TouchableOpacity>
          <Text
            style={{ fontSize: 36 }}
            color="green"
            onPress={this.incrementCount}
          >
            +
          </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 80 }}>{this.state.counter}</Text>
        <TouchableOpacity>
          <Text
            style={{ fontSize: 36 }}
            color="red"
            onPress={this.decrementCount}
          >
            -
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state.counter };
}

export default connect(mapStateToProps)(CounterComponent);

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
