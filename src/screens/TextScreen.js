import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {  

    const [password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput 
                style={styles.input}
                autoCapitalize = 'none'
                autoCorrect = {false}
                value = {password}
                onChangeText = {(newTextValue) => setPassword(newTextValue)}
            />
            { password.length < 4 ? <Text>Password Must Be At Least Four Characters</Text> : <Text>Acceptable Password Length</Text>}          
        </View>
    );
};

const styles = StyleSheet.create ({  
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;