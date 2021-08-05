import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";

import React, { Component } from 'react';
import HeaderComponent from "../header/header";

import Detail_General_Order from "../list_general_orders/detail_general_orders";
import List_Order_by_date from './list_order_by_date';

export class Tab_Order_date extends Component
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
       <StackDetailDateOrder/>
     </NavigationContainer>
      </>
    );
    }
    
 }
 class StackDetailDateOrder extends Component
 {
 
   render()
   {
 
   const Stack=createStackNavigator();
    return(
       <>
       
  <Stack.Navigator initialRouteName="List Date Orders">
   <Stack.Screen name="List Date Orders" component={List_Order_by_date}/>
    <Stack.Screen name="DetailDateOrder" component={Detail_General_Order}/>  
  </Stack.Navigator>
     
       </>
   );
   
   }
 }