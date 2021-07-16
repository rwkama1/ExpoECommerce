

import Detail_Category from './detail_category';
import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import {Icon} from "react-native-elements";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import List_categories from './list_categories';
import Add_category from './add_category';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export class Tab_Cateogry extends Component
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
       <StackDetailCategory/>
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
       <Tab.Screen name='List Categories'
        component={List_categories} 
        options={{
          tabBarIcon:({color,size})=>(
           <Icon name="list" color={color} size={size}/>
           ),
          }}
        />
       <Tab.Screen name='Add Category'
        component={Add_category} 
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
    //    {/* Creo una especie de pantallas una va detras de otra,
  //  en este ejemplo se ejecuta primero CreateUser */}
class StackDetailCategory extends Component
{

  render()
  {

  const Stack=createStackNavigator();
   return(
      <>
 <Stack.Navigator initialRouteName="Category">
  <Stack.Screen name="Category" component={CreateTab}/>
  <Stack.Screen name="DetailCategory" component={Detail_Category}/>
 </Stack.Navigator>
    
      </>
  );
  
  }
}