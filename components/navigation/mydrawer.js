
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
import { Tab_generalorders } from "../list_general_orders/tab_generalorders";
import { Tab_Order_date } from "../list_order_by_date/tab_date_order";
import Login from "../login/login";



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
          <Drawer.Screen name="List General Orders" component={Tab_generalorders}/>
          <Drawer.Screen name="List Date Orders" component={Tab_Order_date}/>
    </Drawer.Navigator>   
    )
  
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


