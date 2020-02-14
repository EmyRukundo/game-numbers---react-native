import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, props.userChoice)
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (currentGues == userChoice) {
      onGameOver();
    }
  }, [currentGuess, props]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don` lie!", "You know that this is wrong...", [
        { text: "Sorry", style: "cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHight.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      current
    );
    setCurrentGuess(nextNumber);
    setRounds(curRounds => curRounds + 1);

    return (
      <View style={styles.screen}>
        <Text>Oppenent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <Button
            title="LOWER"
            onPress={nextGuessHandler.bind(this, "lower")}
          />
          <Button
            title="GREATER"
            onPress={nextGuessHandler.bind(this, "greater")}
          />
        </Card>
      </View>
    );
  };

  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: "center"
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20,
      width: 300,
      maxWidth: "80%"
    }
  });
};

export default GameScreen;
