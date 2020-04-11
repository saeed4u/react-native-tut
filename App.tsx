import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState();
  const [numberOfRounds, setNumberOfRounds] = useState(0);

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
      <Header title="Header" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
