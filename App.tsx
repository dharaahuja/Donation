/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import ItemListScreen from './screens/ItemListScreen';
import colors from './colors';
import DButton from './components/DButton';
import { Provider } from 'react-redux';
import { store } from './store';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const headerStyle = {backgroundColor: colors.navBarTint}

  const addToCartPressed = () => {
  
  }

  const backPressed = () => {

  }
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen} 
            options={{ 
              title: 'Login',
              headerStyle: headerStyle,
              headerTitleStyle: styles.headerTitleStyle }}/>
            <Stack.Screen name="ItemListScreen" component={ItemListScreen}
           options ={{ 
            title: 'Donate for Life',
            headerStyle: headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: () => (
              <DButton
                applyStyles={false}
                title=''
                onPress={addToCartPressed}
                imagePath='/Users/dhruvikaahuja/Documents/Workspace/React-Native/Donation/assets/images/icons8-cart-50.png'
              />  
            ),
            headerLeft: () => (
              <DButton
                applyStyles={false}
                title=''
                onPress={backPressed}
                imagePath='/Users/dhruvikaahuja/Documents/Workspace/React-Native/Donation/assets/images/icons8-back-50.png'
              />  
            )}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
  )
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    headerTitleStyle: {
      fontFamily: 'sans-serif',
      fontSize: 20,
      fontWeight: 'bold',
      color: colors.greenPrimary
    }
});

export default App;
