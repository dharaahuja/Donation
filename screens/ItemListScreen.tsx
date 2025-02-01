import { View, Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import { useState } from "react";
import DCardView from "../components/DCardView";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type DonationStackParamList = {
    LoginScreen: undefined;
    ItemListScreen: undefined;
  };

type ItemListScreenRouteProp = RouteProp<DonationStackParamList, 'ItemListScreen'>

type ItemListScreenNavigationProp = StackNavigationProp<DonationStackParamList, 'ItemListScreen'>

type Props = {
    route: ItemListScreenRouteProp;
    navigation: ItemListScreenNavigationProp;
}

const ItemListScreen = () => {
    const screenDimensions = Dimensions.get('screen');
    let imageDim = {width: (screenDimensions.width - 65), height: 250}
    const [donationItems, setDonationItems] = useState([{
        id: "0", 
        title: "Donate Food to 100 Shramik",
        secondaryText: "Donate food to migrant workers and daily labourers to fight hunger",
        image: "../assets/images/food1.png",

    },{
        id: "1",
        title: "Provide warm rug to 10 dogs",
        secondaryText: "A feed dog is a movable plate which pulls fabric through a sewing machine in discrete steps between stitches. Needle plate, presser foot, and feed dogs ...",
        image: "../assets/images/dogs1.jpeg",
    }, {
        id: '2',
        title: "Donate Food on Birthday",
        secondaryText: "Share the joy with someone who value",
        image: "../assets/images/birthday1.png"
    }])

    return(
        <SafeAreaView>
            <FlatList 
                data={donationItems}
                keyExtractor={item => item.id}
                renderItem={(item) => {
                    return (<DCardView title={item.item.title} 
                        secondaryText={item.item.secondaryText}
                        imagePath={item.item.image}
                        imageHeightWidth={imageDim}/>)
                }}
            />
        </SafeAreaView>
    )
    
}
export default ItemListScreen;