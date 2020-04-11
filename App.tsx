import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const startGameHandler = (selectedNumber: any) => {
    setSelectedNumber(selectedNumber);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (selectedNumber) {
    content = <GameScreen userChoice={selectedNumber} />;
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
