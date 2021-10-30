import "react-native-gesture-handler"
import { NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import {  Text, View } from 'react-native';


import HomeScreen from './screens/Home';
import ISSTrackerScreen from './screens/ISSTracker';
import MeteorScreen from './screens/Meteors';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{HeaderShown: false}}>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="ISSTracker" component={ISSTrackerScreen}/>
         <Stack.Screen name="Meteors" component={MeteorScreen}/>
       </Stack.Navigator>
    </NavigationContainer>

  );
}
