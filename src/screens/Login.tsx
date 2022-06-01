import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton, CustomTextField } from "../components";
import RouteNames from "../constants/RouteNames";

export type Props = {
  navigation: any;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.mainView}>
        <Text style={styles.title}>Welcome to Himatej TS</Text>
        <View style={{ height: 30 }} />
        <CustomTextField
          placeholder="Email"
          onTextChange={(text) => setEmail(`${text}`)}
        />
        <View style={{ height: 8 }} />
        <CustomTextField
          placeholder="Password"
          onTextChange={(text) => setPassword(`${text}`)}
          isSecure
        />
        <View style={{ height: 30 }} />
        <CustomButton
          title="Login"
          onClick={() => {
            navigation.replace(RouteNames.HomeStack, {
              screen: RouteNames.Home,
              params: { email: email },
            });
          }}
        />
      </View>
      <View style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainView: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Login;
