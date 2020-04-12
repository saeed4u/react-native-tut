import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { AppLoading } from "expo";
import * as Font from "expo-font";

const fetchFont = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/font/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/font/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFont} onFinish={() => setDataLoaded(true)} />
    );
  }

  const gameOverHandler = (numberOfRounds: number) => {
    setNumberOfRounds(numberOfRounds);
  };

  const startGameHandler = (selectedNumber: any) => {
    setSelectedNumber(selectedNumber);
    setNumberOfRounds(0);
  };

  const startNewGame = () => {
    setSelectedNumber(undefined);
    setNumberOfRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber && numberOfRounds === 0) {
    content = (
      <GameScreen userChoice={selectedNumber} onGameOver={gameOverHandler} />
    );
  } else if (numberOfRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={selectedNumber}
        numberOfRounds={numberOfRounds}
        startNewGame={startNewGame}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
