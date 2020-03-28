import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/LoginScreen';
import SignUpScreen from './src/SignUpScreen';
import MainScreen from './src/MainScreen';
import MakeScreen from './src/MakeScreen';
import SettingScreen from './src/SettingScreen';
import TimeTableScreen from './src/TimeTableScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Make" component={MakeScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Setting" component={SettingScreen} options={{ headerShown: false, }} />
        <Stack.Screen name="Timetable" component={TimeTableScreen} options={{ headerShown: false, }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

