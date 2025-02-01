import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, useColorScheme, Platform, Dimensions } from "react-native";
import colors from "../colors";

interface DButtonProps {
    onPress: (()=>{}) | any;
    title: string;
    disabled?: boolean;
    imagePath?: string | undefined;
    applyStyles?: boolean;
}

const DButton: React.FC<DButtonProps> = ({onPress, title, imagePath, applyStyles}) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { width: screenWidth } = Dimensions.get('window');

    return(
        <TouchableOpacity style={[applyStyles && (styles.button, {width: screenWidth * 0.70}, isDarkMode? styles.darkContainer :styles.lightContainer) ]}
            onPress={onPress}>
            {((title.length > 0) && (<Text style={[styles.buttonText, {color: isDarkMode ? colors.white : (Platform.OS === 'android'? colors.white: colors.greenPrimary)}]}>{title}</Text>))}
             {(imagePath && (<Image source={{ uri: imagePath }} style={{width: 30, height: 30}} />))}
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