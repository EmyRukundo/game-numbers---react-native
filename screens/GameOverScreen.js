import React from "react";
import { View, Text, Stylesheet, Button } from "react-native";

const GameOverScreen = props => {
  <View>
    <Text>The Game is Over</Text>
    <Text>Number of rounds: {props.roundsNumber}</Text>
    <Text>Number was: {props.userNumber}</Text>
    <Button title="New Game" onPress={props.onRestart} />
  </View>;
};

const styles = Stylesheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
