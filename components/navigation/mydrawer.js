
import {Tab_Cateogry} from "../maintenance_category/tab_category";
import Notifications from "../notifications";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import React, { Component } from 'react';
export class MyDraw extends Component
{
 render ()
 {
  let Drawer = createDrawerNavigator();
   return(
     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
          <Drawer.Screen name="Category Maintenance" component={Tab_Cateogry}/>
          <Drawer.Screen name="Notifications" component={Notifications}/>
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


