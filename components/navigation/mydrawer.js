
import {Tab_Cateogry} from "../maintenance_category/tab_category";

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { Tab_Articles } from "../maintenace_articles/tab_articles";
export class MyDraw extends Component
{
 render ()
 {
  let Drawer = createDrawerNavigator();
   return(
     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
          <Drawer.Screen name="Category Maintenance" component={Tab_Cateogry}/>
          <Drawer.Screen name="Articles Maintenance" component={Tab_Articles}/>
    </Drawer.Navigator>   )
  
 }
}
class CustomDrawerContent extends Component {
  render()
  {  return (
    <DrawerContentScrollView {...this.props}>
      <DrawerItemList {...this.props} />
    </DrawerContentScrollView>
  );}
}


