import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

const GameOverScreen = (props: any) => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} resizeMode="cover" />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.bodyText}>
          Your phone needed{" "}
          <Text style={styles.highlightText}>{props.numberOfRounds}</Text> to
          guess the number{" "}
          <Text style={styles.highlightText}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <PrimaryButton onPress={() => props.startNewGame()}>
        New Game
      </PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  highlightText: {
    color: colors.primary,
    fontFamily: "open-sans-bold",
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical: 15,
  },
  bodyText: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default GameOverScreen;
