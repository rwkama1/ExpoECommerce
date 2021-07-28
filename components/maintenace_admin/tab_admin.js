import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import {Icon} from "react-native-elements";
import Add_Admin from './add_admin';
import List_Admins from './list_admins';
import Detail_Admin from './detail_admin';

export class Tab_Admins extends Component
{
  render()
  {
    return(
      <>
      <HeaderComponent navigation={this.props.navigation} ></HeaderComponent>
      <StackNavigation/> 
     </>
    )
  }
 }
 class  StackNavigation extends Component
 {
  render()
  {
    return(
      <>
     <NavigationContainer independent={true}>
       <StackDetailAdmin/>
     </NavigationContainer>
      </>
    );
    }
    
 }
 class CreateTab extends Component
{
  render()
  {
    
      const Tab = createBottomTabNavigator();
      return( 
      <>
   
      <Tab.Navigator>
       <Tab.Screen name='List Admins'
        component={List_Admins} 
        options={{
          tabBarIcon:({color,size})=>(
           <Icon name="list" color={color} size={size}/>
           ),
          }}
        />
    
       <Tab.Screen name='Add Admin'
        component={Add_Admin} 
        options={{
          tabBarIcon:({color,size})=>(
           <Icon name="add" color={color} size={size}/>
           ),
          }}/>
     </Tab.Navigator>

      </>
  );
  
  }
}
 class StackDetailAdmin extends Component
 {
 
   render()
   {
 
   const Stack=createStackNavigator();
    return(
       <>
  <Stack.Navigator initialRouteName="Admins">
   <Stack.Screen name="Admins" component={CreateTab}/>
    <Stack.Screen name="DetailAdmin" component={Detail_Admin}/> 
  </Stack.Navigator>
     
       </>
   );
   
   }
 }