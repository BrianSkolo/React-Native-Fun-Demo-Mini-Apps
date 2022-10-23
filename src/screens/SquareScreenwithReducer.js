import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "./components/ColorCounter";

const COLOR_INCREMENT = 20;

// arg 1 (state) === our state object is {red: 0, blue:0, green: 0}.  arg 2 (action) === the update we are going to do to the state... action === { colorToChange: 'red' || 'blue' || 'green', amount: 20 || -20 }

// type (colorToChange) = string that describes the exact change operation we want to make
// payload (amount) = some data that is critical to the operation
const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "red":
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount };
    case "blue":
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount };
    case "green":
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    blue: 0,
    green: 0,
  });
  
  const { red, blue, green } = state;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
