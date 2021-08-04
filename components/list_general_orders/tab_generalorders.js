import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import Detail_General_Order from './detail_general_orders';
import List_Delivered_Orders from './listdeliveredorders';
import List_General_Orders from "./listgeneralorders";
import {Icon} from "react-native-elements";
import List_Customer_Orders from './listcutomerorders';



export class Tab_generalorders extends Component
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
       <StackDetailGeneralOrders/>
     </NavigationContainer>
      </>
    );
    }
    
 }
 class CreateTabOrder extends Component
 {
   render()
   {
     
       const Tab = createBottomTabNavigator();
       return( 
       <>
      <Tab.Navigator>
        <Tab.Screen name='List General Orders'
         component={List_General_Orders} 
         options={{
           tabBarIcon:({color,size})=>(
            <Icon name="list" color={color} size={size}/>
            ),
           }}
         />
     
        <Tab.Screen name='List Delivered Orders'
         component={List_Delivered_Orders} 
         options={{
           tabBarIcon:({color,size})=>(
            <Icon name="list" color={color} size={size}/>
            ),
           }}
         />
        <Tab.Screen name='List Customer Orders'
         component={List_Customer_Orders} 
         options={{
           tabBarIcon:({color,size})=>(
            <Icon name="list" color={color} size={size}/>
            ),
           }}
         />

      </Tab.Navigator>
 
       </>
   );
   
   }
 }
 class StackDetailGeneralOrders extends Component
 {
 
   render()
   {
 
   const Stack=createStackNavigator();
    return(
       <>
       
  <Stack.Navigator initialRouteName="List Orders">
   <Stack.Screen name="List Orders" component={CreateTabOrder}/>
  <Stack.Screen name="DetailGeneralOrder" component={Detail_General_Order}/>   
  </Stack.Navigator>
     
       </>
   );
   
   }
 }