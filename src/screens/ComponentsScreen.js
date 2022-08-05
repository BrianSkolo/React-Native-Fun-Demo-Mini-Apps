import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {

  const Name = <Text style={styles.textStyleSubHeader}>Brian</Text>;

  return (
    <View>
      <Text style={styles.textStyleHeader}>Getting Started with React Native</Text>
      {Name}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleHeader: {
    fontSize: 30,
  },
  textStyleSubHeader: {
    fontSize: 15,
  },
});

export default ComponentsScreen;