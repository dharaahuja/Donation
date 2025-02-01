import React from "react";
import { TouchableOpacity, Text, StyleSheet, useColorScheme, Platform, Dimensions } from "react-native";
import colors from "../colors";

interface DButtonProps {
    onPress: (()=>{}) | any;
    title: string;
    disabled?: boolean;
}

const DButton: React.FC<DButtonProps> = ({onPress, title}) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { width: screenWidth } = Dimensions.get('window');

    return(
        <TouchableOpacity style={[styles.button, {width: screenWidth * 0.70}, isDarkMode? styles.darkContainer :styles.lightContainer ]}
        onPress={onPress}>
            <Text style={[styles.buttonText, {color: isDarkMode ? colors.white : (Platform.OS === 'android'? colors.white: colors.greenPrimary)}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    lightContainer: {
        backgroundColor: Platform.OS === 'android'? '#749E47': '#ffffff',
    },
    darkContainer: {
        backgroundColor: '#749E47',
    }
})

export default React.memo(DButton);