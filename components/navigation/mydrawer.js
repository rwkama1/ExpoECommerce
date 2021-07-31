
import {Tab_Cateogry} from "../maintenance_category/tab_category";

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import React, { Component } from 'react';
import { Tab_Articles } from "../maintenace_articles/tab_articles";
import { Tab_Admins } from "../maintenace_admin/tab_admin";
import {  Tab_Customer } from "../maintenance_customer/tab_customer";
import { Tab_Pendingorders } from "../list_pending_orders/tab_pendingorders";
export class MyDraw extends Component
{
 render ()
 {
  let Drawer = createDrawerNavigator();
   return(
     <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
      
          <Drawer.Screen name="Category Maintenance" component={Tab_Cateogry}/>
          <Drawer.Screen name="Articles Maintenance" component={Tab_Articles}/>
          <Drawer.Screen name="Admin Maintenance" component={Tab_Admins}/>
          <Drawer.Screen name="Customer Maintenance" component={Tab_Customer}/>
          <Drawer.Screen name="List Pending Orders" component={Tab_Pendingorders}/>
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


