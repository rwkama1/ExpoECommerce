import React, { Component } from 'react';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import {View,TouchableOpacity} from 'react-native';
import { Text} from "react-native-elements";
import { add_style } from '../../styles/app_styles';

export default class ButtonNavigation extends Component
 {
  render ()
  {
    return(
        <>
         <View style={add_style.container}>
         <View style={[s.formRow,s.row]}>
         <View style={[s.formGroup,s.formCol,s.col]}>
                 <TouchableOpacity
                    onPress={this.navigationCategoryMaintenance}
                    style={[s.btnTouchable]}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>Category Maintenance</Text> 
                     </View>
                    
                    </TouchableOpacity>
                 </View>
                 <View style={[s.formGroup,s.formCol,s.col]}>
                      <TouchableOpacity
                    style={[s.btnTouchable]}
                    onPress={this.navigationArticleMaintenance}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>Article Maintenance</Text> 
                     </View>
                    
                    </TouchableOpacity>
                </View>
              
         </View>
         <View style={[s.formRow,s.row]}>
         <View style={[s.formGroup,s.formCol,s.col]}>
                 <TouchableOpacity
                    onPress={this.navigationAdminMaintenance}
                    style={[s.btnTouchable]}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>Admin Maintenance</Text> 
                     </View>
                    
                    </TouchableOpacity>
                 </View>
          <View style={[s.formGroup,s.formCol,s.col]}>
                      <TouchableOpacity
                    style={[s.btnTouchable]}
                    onPress={this.navigationCustomerMaintenance}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>Customer Maintenance</Text> 
                     </View>
                    
                    </TouchableOpacity>
                </View>
              
         </View>
         <View style={[s.formRow,s.row]}>
         <View style={[s.formGroup,s.formCol,s.col]}>
                 <TouchableOpacity
                    onPress={this.navigationPendingOrders}
                    style={[s.btnTouchable]}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>Pending Orders</Text> 
                     </View>
                    
                    </TouchableOpacity>
                 </View>
          <View style={[s.formGroup,s.formCol,s.col]}>
                      <TouchableOpacity
                    style={[s.btnTouchable]}
                    onPress={this.navigationGeneralOrders}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>General Orders</Text> 
                     </View>
                    
                    </TouchableOpacity>
                </View>
              
         </View>
      
         <View style={[s.formRow,s.row]}>
         <View style={[s.formGroup,s.formCol,s.col]}>
                 <TouchableOpacity
                    onPress={this.navigationDateOrders}
                    style={[s.btnTouchable]}
                     >
                     <View style={[s.btn,s.btnLight]}>
                        <Text style={[s.btnText,s.btnLightText]}>List Date Orders</Text> 
                     </View>
                    
                    </TouchableOpacity>
                 </View>
        
              
         </View>
        
         </View>
        </>
      )
  }
  navigationCategoryMaintenance=()=>
  {
    this.props.navigation.navigate("Category");
  }
  navigationArticleMaintenance=()=>
  {
    this.props.navigation.navigate("Article");
  }
  navigationAdminMaintenance=()=>
  {
    this.props.navigation.navigate("Admin");
  }
  navigationCustomerMaintenance=()=>
  {
    this.props.navigation.navigate("Customer");
  }
  navigationPendingOrders=()=>
  {
    this.props.navigation.navigate("List Pending Orders");
  }
  navigationGeneralOrders=()=>
  {
    this.props.navigation.navigate("GeneralOrders");
  }
  navigationDateOrders=()=>
  {
    this.props.navigation.navigate("List Date Orders");
  }
}