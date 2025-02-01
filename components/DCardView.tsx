import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../colors";

// Follow https://m2.material.io/components/cards#specs for different UI designs and design dynamic UI for it

enum ImagePosition {
    right = 1,
    left,
    center,
}

interface DCardViewProps {
    title: string,
    secondaryText?: string | undefined,
    thumbnailImage?: string | undefined,
    imagePath: string
    imagePosition?: ImagePosition | undefined,
    imageHeightWidth?: {height: number, width: number} | undefined,
    actionButtonText?: string | undefined,
    actionButtonOnPress?: (()=>{}) | undefined
}

const DCardView: React.FC<DCardViewProps> = ({title, secondaryText, imagePath, imagePosition, imageHeightWidth}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.primaryTextStyle}>{title}</Text>
            <Text style={styles.secondaryTextStyle}>{secondaryText}</Text>
             {(imagePath && imageHeightWidth && 
                        (<Image source={require('../assets/images/birthday1.png')} style={{width: imageHeightWidth?.width, height: imageHeightWidth?.height}} />))}
        
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderColor: colors.greenPrimary,
        borderWidth: 2,
        borderRadius: 6,
        padding: 10,
        margin: 20,
    },
    primaryTextStyle: {
        fontFamily: 'sans-serif',
        color: colors.textPrimary,
        fontSize: 26,
        fontWeight: 'bold',
    },
    secondaryTextStyle: {
        fontFamily: 'sans-serif',
        color: colors.textSecondary,
        fontSize: 15,
        fontWeight: 'condensed',
    }
})

export default DCardView;