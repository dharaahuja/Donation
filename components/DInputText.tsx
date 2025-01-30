import React from "react";
import { View, Text, TextInput, StyleSheet, useColorScheme, Dimensions } from 'react-native';
import colors from "../colors";

interface DInputTextPropos {
    title: string,
    placeholderText: string,
    isSecure?: boolean | undefined,
    onChangeText?: ((text: string) => void) | undefined,
    onBlur?: any | undefined,
    value?: any | undefined,
    errorText?: any | undefined,
    touched?: boolean | undefined,
}

const DInputText: React.FC<DInputTextPropos> = ({title, placeholderText, onChangeText, isSecure, onBlur, value, errorText, touched}) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { width: screenWidth } = Dimensions.get('window');

    return (
        <View>
            <Text style={[styles.title, {color: isDarkMode ? colors.white : colors.greenPrimary}]}>{title}</Text>
            <TextInput style={[styles.textInput, {marginBottom: (errorText && touched) ? 0 : 15},{color: isDarkMode ? colors.white : colors.greenPrimary, width: screenWidth * 0.75}, {borderBottomColor: isDarkMode ? colors.white : colors.greenPrimary}]} 
            placeholder={placeholderText} 
            onChangeText={onChangeText}
            secureTextEntry={isSecure}/>
            {(errorText && touched &&
            (<Text style={styles.error}>{errorText}</Text>))}
        </View>
    )
}

const styles = StyleSheet.create( {
    title: {
        fontFamily:'sans-serif',
        fontSize: 14,
        fontWeight: 'condensed',
        margin: 2,
    },
    textInput: {
        fontFamily:'sans-serif',
        fontSize: 26,
        fontWeight: 'bold',
        padding: 10,
        borderBottomWidth: 2,
    },
    error: {
        fontFamily:'sans-serif',
        fontSize: 10,
        fontWeight: 'light',
        color: colors.red,
        marginBottom: 15,
    }
})

export default React.memo(DInputText);