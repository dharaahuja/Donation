import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import colors from "../colors";
import DButton from "./DButton";

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
    imagePath?: string
    imagePosition?: ImagePosition | undefined,
    imageHeightWidth?: {height: number, width: number} | undefined,
    actionButtonText?: string | undefined,
    actionButtonOnPress?: (()=>{}) | any,
    actionButtonImage?: string,
}

const DCardView: React.FC<DCardViewProps> = ({title, secondaryText, imagePath, imagePosition, imageHeightWidth, actionButtonText, actionButtonOnPress, actionButtonImage}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.primaryTextStyle}>{title}</Text>
            <Text style={styles.secondaryTextStyle}>{secondaryText}</Text>
             {(imagePath && imageHeightWidth && 
            (<Image source={{ uri: imagePath }} style={{width: imageHeightWidth?.width, height: imageHeightWidth?.height}} />))}
            {((actionButtonText || actionButtonImage) && (<DButton 
            title={actionButtonText}
            onPress={actionButtonOnPress} 
            imagePath={actionButtonImage}
            transparentBackground={true}/>))}
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
        paddingBottom: 10,
    }
})

export default DCardView;