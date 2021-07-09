
import { StyleSheet, Text, View } from 'react-native';
import Detail_Category from './detail_category';
import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { tab_styles } from '../../styles/app_styles';
import List_categories from './list_categories';
import Add_category from './add_category';
import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";
import ThemedListItem from 'react-native-elements/dist/list/ListItem';

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
    
      const Tab = createMaterialTopTabNavigator();
      return( 
      <>
   
      <Tab.Navigator>
       <Tab.Screen name='List Categories' component={List_categories} />
       <Tab.Screen name='Add Category' component={Add_category} />
     </Tab.Navigator>

      </>
  );
  
  }
}
class StackDetailCategory extends Component
{
  render()
  {
    
  const Stack=createStackNavigator();
   return(
      <>
 <Stack.Navigator initialRouteName="Category">
   {/* Creo una especie de pantallas una va detras de otra,
   en este ejemplo se ejecuta primero CreateUser */}
  <Stack.Screen name="Category" component={CreateTab}/>
  <Stack.Screen name="DetailCategory" component={Detail_Category}/>
 </Stack.Navigator>
    )
      </>
  );
  
  }
}