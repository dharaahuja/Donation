import { View, Text, SafeAreaView, FlatList, Dimensions, StyleSheet, StatusBar, ActivityIndicator } from "react-native";
import { useEffect, useState, Suspense } from "react";
import DCardView from "../components/DCardView";
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, NavigationContainer, useNavigation } from '@react-navigation/native';
import axios from "axios";
import { DonationItem, ItemsState, add_dontion, remove_donation } from "./itemsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { store } from './store.js'
import DButton from "../components/DButton";
import colors from "../colors";

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
    const addDonations = useSelector((state: ItemsState) => state.cartList)
    const [donationItems, setDonationItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const screenDimensions = Dimensions.get('screen');
    let imageDim = {width: (screenDimensions.width - 65), height: 250}

    const addItem = (item: DonationItem) => {
       console.log("add item called");
        dispatch(add_dontion(item))
    }

    const cartListView = () => {
        console.log('add to cart');
       console.log(store.getState())
    }

    const headerStyle = {backgroundColor: colors.navBarTint}

    useEffect(() => {
        console.log("use effect");

        navigation.setOptions({
            title: 'Donate for Life',
            headerStyle: headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerLeft: () => (
                <DButton
                transparentBackground={true}
                  title=''
                  onPress={()=>{navigation.goBack()}}
                  imagePath='/Users/dhruvikaahuja/Documents/Workspace/React-Native/Donation/assets/images/icons8-back-50.png'
                />  
              ),
              headerRight: () => (
                <DButton
                transparentBackground={true}
                  title=''
                  onPress={cartListView}
                  imagePath='/Users/dhruvikaahuja/Documents/Workspace/React-Native/Donation/assets/images/icons8-cart-50.png'
                />  
              ),
        })

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
             <StatusBar barStyle="light-content" />
            {/* <Text>Number of Items in cart: {JSON.stringify(store.getState())}</Text> */}
            <FlatList 
                data={donationItems}
                keyExtractor={item => item["id"]}
                renderItem={(item) => {
                    return (<DCardView title={item.item["title"]} 
                        secondaryText={item.item["secondaryText"]}
                        imagePath={item.item["image"]}
                        imageHeightWidth={imageDim}
                        actionButtonText=''
                        actionButtonOnPress={() => {
                            let serializedObj = JSON.stringify(item.item);
                            let donationItem: DonationItem = JSON.parse(serializedObj);
                            console.log(donationItem)
                            addItem(donationItem)
                        }}
                        actionButtonImage='/Users/dhruvikaahuja/Documents/Workspace/React-Native/Donation/assets/images/add_icon.png'
                        />)
                }}
            />
        </SafeAreaView>
    )
    
}


const styles =  StyleSheet.create({
    headerTitleStyle: {
      fontFamily: 'sans-serif',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.greenPrimary
    }
});

export default ItemListScreen;