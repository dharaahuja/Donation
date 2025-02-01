import { View, Text, SafeAreaView, FlatList, Dimensions } from "react-native";
import { useEffect, useState } from "react";
import DCardView from "../components/DCardView";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import axios from "axios";
import { DonationItem, addDonation, removeDaonation } from "../store/itemsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { store } from "../store";

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

type RootState = ReturnType<typeof store.getState>;

const ItemListScreen = () => {
    const dispatch = useDispatch()
    const [donationItems, setDonationItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const screenDimensions = Dimensions.get('screen');
    let imageDim = {width: (screenDimensions.width - 65), height: 250}

    const addItem = (item: DonationItem) => {
       console.log("add item called");
        dispatch(addDonation(item))
    }
    
    useEffect(() => {
        console.log("use effect");
        const fetchDonationList = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/donationItems`);
                setDonationItems(response.data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchDonationList();
    }, []);

     // const state = useSelector((state:RootState)=> {
    //     return store.getState()
    // })
    if(loading){
        return(  
         (<SafeAreaView>
            <Text>Loading...</Text>
         </SafeAreaView>
         )
    )}
    return(
        <SafeAreaView>
            <Text>Number of Items in cart: {JSON.stringify(store.getState())}</Text>
            <FlatList 
                data={donationItems}
                keyExtractor={item => item["id"]}
                renderItem={(item) => {
                    return (<DCardView title={item.item["title"]} 
                        secondaryText={item.item["secondaryText"]}
                        imagePath={item.item["image"]}
                        imageHeightWidth={imageDim}
                        actionButtonText="Add"
                        actionButtonOnPress={addItem}
                        />)
                }}
            />
        </SafeAreaView>
    )
    
}
export default ItemListScreen;