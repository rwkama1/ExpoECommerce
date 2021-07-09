 import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MyDraw } from "./components/navigation/mydrawer";
import { Tab_Cateogry } from './components/maintenance_category/tab_category';
import Detail_Category from './components/maintenance_category/detail_category';

import {  createStackNavigator} from "@react-navigation/stack";
// class Feed extends Component
// {
//   render()
//   {
//   return( 
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//           <Text>Feed Screen</Text>
//            <Button title="Open drawer" onPress={() => this.props.navigation.openDrawer()} />
//           <Button title="Toggle drawer" onPress={() =>this.props.navigation.toggleDrawer()} />
//       </View>
//    );
//   }
// }
// class Notifications extends Component
// {
//   render()
//   {
//   return( 
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Notifications Screen</Text>
//       </View>
//      );
//   }
// }
// class CustomDrawerContent extends Component
// {
//   render()
//   {
//   return( 
//     <DrawerContentScrollView {...this.props}>
//      <DrawerItemList {...this.props} />
//           <DrawerItem
//             label="Close drawer"
//             onPress={() => this.props.navigation.closeDrawer()}
//           />
//          <DrawerItem
//             label="Toggle drawer"
//              onPress={() => this.props.navigation.toggleDrawer()}
//           />
//        </DrawerContentScrollView>
//      );
//   }
// }
// class MyDraw extends Component
// {
//   render()
//   {
//   let Drawer = createDrawerNavigator();
//   return( 
//     <Drawer.Navigator drawerContent={props =><CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Feed" component={Feed} />
//      <Drawer.Screen name="Notifications" component={Notifications} />
//    </Drawer.Navigator>
//     );
//   }
// }

export default class App extends Component
 {

//   MyStack()
//   {
//     const Stack=createStackNavigator();
//     return(
//  <Stack.Navigator>
//    {/* Creo una especie de pantallas una va detras de otra,
//    en este ejemplo se ejecuta primero CreateUser */}
  
//   <Stack.Screen name="DetailCategory" component={Detail_Category}/>
//  </Stack.Navigator>
//     )
//   }
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