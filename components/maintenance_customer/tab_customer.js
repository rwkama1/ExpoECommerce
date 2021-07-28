import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import {Icon} from "react-native-elements";
import Add_Customer from './add_customer';
import Detail_Customer from './detail_customer';
import List_Customer from './list_customer';

export class Tab_Customer extends Component
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
       <StackDetailCustomer/>
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
       <Tab.Screen name='List Customers'
        component={List_Customer} 
        options={{
          tabBarIcon:({color,size})=>(
           <Icon name="list" color={color} size={size}/>
           ),
          }}
        />
       
       <Tab.Screen name='Add Customer'
       
        component={Add_Customer} 
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
 class StackDetailCustomer extends Component
 {
 
   render()
   {
 
   const Stack=createStackNavigator();
    return(
       <>
  <Stack.Navigator initialRouteName="Customer">
   <Stack.Screen name="Customer" component={CreateTab}/>
   <Stack.Screen name="DetailCustomer" component={Detail_Customer}/>
  </Stack.Navigator>
     
       </>
   );
   
   }
 }