import React from "react";
import { StyleSheet, Text, View } from "react-native";

export type Props = {
  route: any;
  _navigation: any;
};

const Home: React.FC<Props> = ({ route, _navigation }) => {
  const { params } = route;
  const name = params.email || "User";
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello {name}
        {"\n"}Welcome to Home Screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Home;
