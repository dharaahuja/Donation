/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  BackHandler,
  Alert
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import LoginScreen from './screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './screens/ProfileScreen';
import ItemListScreen from './screens/ItemListScreen';
import Registration from './screens/Registration';
import colors from './colors';
import DButton from './components/DButton';
import { Provider } from 'react-redux';
import { store, persistor } from './screens/store.js'
import { PersistGate } from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const headerStyle = {backgroundColor: colors.navBarTint}
  return (
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
            <Stack.Screen name="LoginScreen" component={LoginScreen} 
            options={{ 
              title: 'Login',
              headerStyle: headerStyle,
              headerTitleStyle: styles.headerTitleStyle }}/>
            <Stack.Screen name="Registration" component={Registration}/>
            <Stack.Screen name="ItemListScreen" component={ItemListScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
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
