import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export type Props = {
  placeholder: string;
  onTextChange?: (text: string) => void;
  isSecure?: boolean;
};

const CustomTextField: React.FC<Props> = ({
  placeholder = "",
  onTextChange,
  isSecure = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          selectionColor={"black"}
          placeholder={placeholder}
          onChangeText={onTextChange}
          autoComplete="off"
          autoCorrect={false}
          contextMenuHidden={true}
          dataDetectorTypes="none"
          secureTextEntry={isSecure}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
  inputView: {
    width: "100%",
    height: 48,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  input: {
    width: "100%",
    height: 48,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});

export default CustomTextField;
