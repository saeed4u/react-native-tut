import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Keyboard,
  Button,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
import GlobalStyles from "../constants/default-styles";
import BodyText from "../components/BodyText";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = (props: any) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState(0);

  const numberInputHandler = (inputText: string) => {
    setEnteredNumber(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
    setConfirmed(false);
  };

  const confirmGameHandler = () => {
    const chosen = parseInt(enteredNumber);
    if (isNaN(chosen) || chosen <= 0 || chosen > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99",
        [
          {
            text: "Ok!",
            style: "destructive",
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }
    Keyboard.dismiss();
    setConfirmed(true);
    setSelectedNumber(chosen);
    setEnteredNumber("");
  };
  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText style={GlobalStyles.bodyText}>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <PrimaryButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game!
        </PrimaryButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={{ ...styles.title, ...GlobalStyles.titleText }}>
          Start a New Game!
        </Text>
        <Card style={styles.inputContainer}>
          <Text style={GlobalStyles.bodyText}>Select a number</Text>
          <Input
            placeholder="Brrr"
            style={styles.input}
            blurOnSubmit
            keyboardType="number-pad"
            maxLength={2}
            value={enteredNumber}
            onChangeText={numberInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                onPress={resetInputHandler}
                color={Colors.accent}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={confirmGameHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: 100,
  },
  input: {
    width: 100,
    textAlign: "center",
    marginTop: 10,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});

export default StartGameScreen;
