import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child # 1</Text>
      <Text style={styles.textTwoStyle}>Child # 2</Text>
      <Text style={styles.textThreeStyle}>Child # 3</Text>
    </View>
  );
};

//flex can be divided between 10
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    // flexDirection: 'row'
    
   
  },
  
  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",
    

  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
  
    // position: 'absolute',
    fontSize: 18,
    left: 10,
   
 
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
 

  },
  
});

export default BoxScreen;
