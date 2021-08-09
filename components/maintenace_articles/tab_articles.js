
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';

import {Icon} from "react-native-elements";
import List_Articles from './list_articles';
import Add_Article from './add_article';



export class CreateTabArticles extends Component
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
