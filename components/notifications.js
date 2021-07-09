
import { View, Text, Button } from 'react-native';
import React, { Component } from 'react';
import HeaderComponent from "./header/header";
export default class Notifications extends Component
{
 render ()
 {
    return( 
        <>
        <HeaderComponent navigation={this.props.navigation} ></HeaderComponent>
        {/* Llamo al componente indicando la navegacion como propiedad */}
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Text>Notifications Screen</Text>
         </View>
         </>
    );
 }
 
}