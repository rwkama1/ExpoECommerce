import React, { Component } from 'react';
import {  Header,Button,Text} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class HeaderComponent extends Component
 {
    render ()
    {
      return(
        <Header >
          {<MenuButton navigation={this.props.navigation}  />}
          {<CenterText/>}
        </Header>
      )   
    }
}


 class MenuButton extends Component
{
    render ()
    {
      return(
        <Button
        icon={
        <Icon
          name="bars"
          size={25}
          color="white"
        />
      }
      onPress={() => this.props.navigation.openDrawer()}
    />
      )
      
    }

}
 class CenterText extends Component
{
  render ()
  {
    return(
      <Text h4 style={{color:"white"}}>Maintenance</Text>
    )
    
  }

}

