import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/home';
import { Start } from '../screens/start';
import { SignIn } from '../screens/signin';
import { ForgetPassword } from '../screens/forgetpassword';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
    </Stack.Navigator>
  );
}