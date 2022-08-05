import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] =useState([]);
  
    return (
        <View>
            <Button 
                title="Add a Color"
                // creates a new array, ...colors means take a look at the colors array.  Take all of the elements inside and add them to the new array (below);  add a new entry by calling radomRGB (populates new array with a random color(s))
                onPress={() => {
                    setColors([...colors, randomRGB()])
                }} 
            />
            
            <FlatList
                keyExtractor={(item) => item}
                // when we press the button on the app it rerenders and gets a new list of data
                data={colors}
                // then it calls render item for each addition string that we have in(add to) the array
                renderItem={({ item }) => {
                    return <View style={{ height: 100, width: 100, backgroundColor: item }}/>
                    }
                }
            />
        </View>
    )
}

const randomRGB = () => {
    // math.random gives us a random number between 0 and 1; * 256 gives us a value between zero and 256; Math.floor accepts a float and returns whole number less than or equal to the given number (whatever math.random() * 256 gives us)
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // template string that returns red, green or blue from above
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;