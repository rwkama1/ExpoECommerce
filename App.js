 import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDraw } from "./components/navigation/mydrawer";
import Login from "./components/login/login";
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends Component
 {

 
  render ()
  {
    const Stack = createStackNavigator();
    return(
      <>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Maintenance" component={MyDraw} />
      </Stack.Navigator>
     </NavigationContainer>
      </>
    );

  }
 
}