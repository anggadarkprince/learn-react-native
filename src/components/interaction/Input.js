import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, placeholder, onChangeText, secureTextEntry, autoCompleteType, keyboardType, textContentType }) => (
    <View style={styles.containerStyle}>
        <Text style={styles.labelStyle}>{label}</Text>
        <TextInput
            secureTextEntry={secureTextEntry || false}
            autoCorrect={false}
            autoCompleteType={autoCompleteType}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.inputStyle}
            clearButtonMode="while-editing"
            keyboardType={keyboardType || 'default'}
            textContentType={textContentType}
        />
    </View>
);

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 10,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };
