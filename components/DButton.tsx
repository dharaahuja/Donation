import React from "react";
import { Image, TouchableOpacity, Text, StyleSheet, useColorScheme, Platform, Dimensions } from "react-native";
import colors from "../colors";

interface DButtonProps {
    onPress: (()=>{}) | any;
    title?: string;
    disabled?: boolean;
    imagePath?: string | undefined;
    transparentBackground?: boolean;
}

const DButton: React.FC<DButtonProps> = ({onPress, title, imagePath, transparentBackground}) => {
    const colorScheme = useColorScheme();
    const isDarkMode = colorScheme === 'dark';
    const { width: screenWidth } = Dimensions.get('window');
    
    const normalStyle = [(styles.button, {width: screenWidth * 0.70}, transparentBackground === true ? null: isDarkMode? styles.lightContainer :styles.darkContainer) ]
    return(
        <TouchableOpacity style={normalStyle}
            onPress={onPress}>
            {(title && (<Text style={[styles.buttonText, {color: isDarkMode ? colors.greenPrimary : colors.white }]}>{title}</Text>))}
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
        textAlign: 'center',
    },
    lightContainer: {
        backgroundColor: '#ffffff',
        borderColor: '#749E47',
        borderWidth: 2,
        borderRadius: 10,
    },
    darkContainer: {
        backgroundColor: '#749E47',
        borderColor: '#749E47',
        borderWidth: 2,
        borderRadius: 10,
    }
})

export default React.memo(DButton);