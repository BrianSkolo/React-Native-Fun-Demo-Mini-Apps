import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
    // useState(0) = initial value of zero; [counter, setCounter] = counter is piece of state that will change over time, setCounter how we change the counter variable's value.  If we want to update the state of counter then we call setCounter() with what we want the new value to be.  This is also called a setter function.
    const [counter, setCounter] = useState(0);

    return (
        <View>
            <Button 
                title="Count Up" 
                onPress={() => {
                    setCounter(counter + 1)
                }}/>
             <Button 
                title="Count Down" 
                onPress={() => {
                    setCounter(counter - 1)
                }}/>
            
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CounterScreen;