
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';

import {Icon} from "react-native-elements";
import Add_Customer from './add_customer';

import List_Customer from './list_customer';


 export class CreateTabCustomer extends Component
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
