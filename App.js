 import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { MyDraw } from "./components/navigation/mydrawer";
// import Login from "./components/login/login";
import { createStackNavigator } from '@react-navigation/stack';

import Login from './components/login/login';
import {  Header,Button,Text} from "react-native-elements";
import Icon from 'react-native-vector-icons/AntDesign';
import ButtonNavigation from './components/home/ButtonNavigation';
import { CreateTabCategory, Tab_Cateogry } from './components/maintenance_category/tab_category';
import Detail_Category from './components/maintenance_category/detail_category';
import { CreateTabArticles } from './components/maintenace_articles/tab_articles';
import Detail_Article from './components/maintenace_articles/detail_article';
import { CreateTabAdmin } from './components/maintenace_admin/tab_admin';
import Detail_Admin from './components/maintenace_admin/detail_admin';
import { CreateTabCustomer } from './components/maintenance_customer/tab_customer';
import Detail_Customer from './components/maintenance_customer/detail_customer';
import { CreateTabGeneralOrder } from './components/list_general_orders/tab_generalorders';
import Detail_General_Order from './components/list_general_orders/detail_general_orders';
import List_Pending_Orders from './components/list_pending_orders/listpendingorders';
import Detail_Pending_Order from './components/list_pending_orders/detail_pending_order';
import List_Order_by_date from './components/list_order_by_date/list_order_by_date';

export default class App extends Component
 {

 
  render ()
  {
    const Stack = createStackNavigator();
    return(
      <>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Login">
       <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={ButtonNavigation} />
        <Stack.Screen name="Category" component={CreateTabCategory}/>
        <Stack.Screen name="DetailCategory" component={Detail_Category}/>
        <Stack.Screen name="Article" component={CreateTabArticles}/>
        <Stack.Screen name="DetailArticle" component={Detail_Article}/>
        <Stack.Screen name="Admin" component={CreateTabAdmin}/>
        <Stack.Screen name="DetailAdmin" component={Detail_Admin}/>
        <Stack.Screen name="Customer" component={CreateTabCustomer}/>
        <Stack.Screen name="DetailCustomer" component={Detail_Customer}/>
        <Stack.Screen name="List Pending Orders" component={List_Pending_Orders}/>
       <Stack.Screen name="DetailPendingOrder" component={Detail_Pending_Order}/>
        <Stack.Screen name="GeneralOrders" component={CreateTabGeneralOrder}/>
        <Stack.Screen name="DetailGeneralOrder" component={Detail_General_Order}/>
        <Stack.Screen name="List Date Orders" component={List_Order_by_date}/>
      </Stack.Navigator>
     </NavigationContainer>
      </>
    );

  }
 
}