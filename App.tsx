import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import WelcomeScreen from './source/screens/WelcomeScreen';
import FirstWishScreen from './source/screens/FirstWishScreen'
import LaunchScreen from './source/screens/LaunchScreen';
import MapScreen from './source/screens/MapScreen';
import WishListScreen from './source/screens/WishListScreen';
import WishItemScreen from './source/screens/WishItemScreen';
import {store, persistor} from './source/redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <NavigationContainer>
        <StatusBar/>
        <Stack.Navigator>
          <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ title: 'Welcome' }} />
          <Stack.Screen 
          name="WishList" 
          component={WishListScreen}
          options={{ title: 'Wish List' }} />
          <Stack.Screen 
          name="FirstWish" 
          component={FirstWishScreen}
          options={{ title: 'My First Wish' }} />
          <Stack.Screen 
          name="Launch" 
          component={LaunchScreen}
          options={{ title: 'Launch' }} />
          <Stack.Screen 
          name="Map" 
          component={MapScreen}
          options={{ title: 'Map' }} />
          <Stack.Screen 
          name="Wish" 
          component={WishItemScreen}
          options={{ title: 'Wish number ${wish.id}' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
