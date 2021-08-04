import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";

import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import List_Pending_Orders from './listpendingorders';
import Detail_Pending_Order from './detail_pending_order';

export class Tab_Pendingorders extends Component
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
       <StackDetailPendingOrder/>
     </NavigationContainer>
      </>
    );
    }
    
 }
 class StackDetailPendingOrder extends Component
 {
 
   render()
   {
 
   const Stack=createStackNavigator();
    return(
       <>
       
  <Stack.Navigator initialRouteName="List Pending Orders">
   <Stack.Screen name="List Pending Orders" component={List_Pending_Orders}/>
     <Stack.Screen name="DetailPendingOrder" component={Detail_Pending_Order}/>  
  </Stack.Navigator>
     
       </>
   );
   
   }
 }