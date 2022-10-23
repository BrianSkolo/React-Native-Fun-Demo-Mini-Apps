import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native';


 // useState(0) = initial value of zero; [counter, setCounter] = counter is piece of state that will change over time, setCounter how we change the counter variable's value.  If we want to update the state of counter then we call setCounter() with what we want the new value to be.  This is also called a setter function.

 //dispatch === callMyReducer pretty much

 //useReducer accepts the reducer function and a properties object

 //state === {count: some number}

 //action === how we are going to change our state {type: increment || decrement, payload: }

 const reducer = (state, action) => {

    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + action.payload }
        case 'decrement':
            return { ...state, count: state.count - action.payload }
        default: 
            return state;
    }
 };


const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    
    return (
        <View>
            <Button 
                title="Count Up" 
                onPress={() => {
                dispatch ({ type: 'increment', payload: 1 })
                }}/>
             <Button 
                title="Count Down" 
                onPress={() => {
                    dispatch ({ type: 'decrement', payload: 1 })   
                }}/>
            
            <Text>Current Count: {state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default CounterScreen;