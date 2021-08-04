 import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDraw } from "./components/navigation/mydrawer";
import { Tab_Cateogry } from './components/maintenance_category/tab_category';
import Detail_Category from './components/maintenance_category/detail_category';

import {  createStackNavigator} from "@react-navigation/stack";


export default class App extends Component
 {


  render ()
  {
    return(
      <>
     <NavigationContainer>
     
       <MyDraw/>
     </NavigationContainer>
      </>
    );

  }
 
}