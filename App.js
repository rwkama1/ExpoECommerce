 import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDraw } from "./components/navigation/mydrawer";



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