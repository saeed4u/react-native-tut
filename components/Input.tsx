import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props: any) => {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      {...props}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 40,
    borderColor: "#000",
    borderBottomWidth: 2,
    marginVertical: 10,
  },
});

export default Input;
