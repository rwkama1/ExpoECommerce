import { NavigationContainer } from '@react-navigation/native';
import {  createStackNavigator} from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import HeaderComponent from "../header/header";
import {Icon} from "react-native-elements";
import List_Articles from './list_articles';
import Add_Article from './add_article';
import Detail_Article from './detail_article';

export class Tab_Articles extends Component
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
       <StackDetailArticle/>
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
       <Tab.Screen name='List Articles'
        component={List_Articles} 
        options={{
          tabBarIcon:({color,size})=>(
           <Icon name="list" color={color} size={size}/>
           ),
          }}
        />
       <Tab.Screen name='Add Article'
        component={Add_Article} 
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
class StackDetailArticle extends Component
{

  render()
  {

  const Stack=createStackNavigator();
   return(
      <>
 <Stack.Navigator initialRouteName="Articles">
  <Stack.Screen name="Articles" component={CreateTab}/>
  <Stack.Screen name="DetailArticle" component={Detail_Article}/>
 </Stack.Navigator>
    
      </>
  );
  
  }
}