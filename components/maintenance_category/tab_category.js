
import React, { Component } from 'react';
import {Icon} from "react-native-elements";
import List_categories from './list_categories';
import Add_category from './add_category';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



export class CreateTabCategory extends Component
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
  
