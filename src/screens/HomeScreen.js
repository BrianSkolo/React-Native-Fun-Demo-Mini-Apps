import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({ navigation }) => {
    // console.log(navigation);
  
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button 
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
       <Button 
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      />
       <Button 
        title="Go to Image Screen"
        onPress={() => navigation.navigate('Image')}
      />
       <Button 
        title="Go to Counter Screen"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button 
        title="Go to Square Screen"
        onPress={() => navigation.navigate('Square')}
      />
       <Button 
        title="Go to Square Screen with Reducer"
        onPress={() => navigation.navigate('Reducer')}
      />
       <Button 
        title="Go to Text Screen"
        onPress={() => navigation.navigate('Text')}
      />
       <Button 
        title="Go to Box Screen"
        onPress={() => navigation.navigate('Box')}
      />


      {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text>Go to Components Demo</Text>
      </TouchableOpacity> */}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;


