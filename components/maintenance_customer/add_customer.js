import React,{ Component } from "react";
import { add_style,text_area } from '../../styles/app_styles';

import { 
    TextInput,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
     Alert } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import APIAdmin from "../../model/API/apiadmin";
import APICustomer from "../../model/API/apicustomer";

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
export default class Add_Customer extends Component
{
    constructor() {
        super();
        this.state = {
        idcard:"",
        password:"",
        username:"",
        completename:"",
        creditcard:"", 
        address:""
        
      }
    }
    onChangeText=(name,value)=>
    {
      this.setState(
          {
           ...this.state,[name]:value
          }
      )
    }
    confirmationAddCustomer=async()=>
    {
        Alert.alert("Add the Customer","Are you sure?",
        [
            {text:"Yes",onPress:this.addnewcustomer},
            {text:"No",onPress:()=>{return}}
        ])
    }
    addnewcustomer=()=>
    {       
     const {idcard,password,username,completename,address,creditcard}=this.state;
      APICustomer.getInstance().addCustomer(idcard,completename,username,password,address,creditcard).then(adding => {
              if(adding==="Success")
              {
                Alert.alert(adding,"Customer Added");
                 this.props.navigation.navigate('List Customers');
              }
              else
              {
                 Alert.alert("Error",adding);
              }
               }); 
   } 
    render()
    {
        return(
            <>
        <ScrollView style={add_style.container} >
          <View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Identity Card
            </Text>
               <TextInput 
                value={this.state.idcard}
                keyboardType="numeric"
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('idcard',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
               
            <Text 
            style={[s.formLabelText]}
            >Complete Name
            </Text>
               <TextInput 
                value={this.state.completename}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('completename',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Username
            </Text>
               <TextInput 
                value={this.state.username}
                style={[s.formControl]}       
               onChangeText={(value)=>this.onChangeText('username',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Password
            </Text>
               <TextInput 
                value={this.state.password}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('password',value)}
             /> 
           </View>
         <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Shipping Address
            </Text>
               <TextInput 
                value={this.state.address}
                style={[s.formControl]}
                keyboardType="email-address"
               onChangeText={(value)=>this.onChangeText('address',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Credit Card
            </Text>
               <TextInput 
                value={this.state.creditcard}
                style={[s.formControl]}
                keyboardType="numeric"
               onChangeText={(value)=>this.onChangeText('creditcard',value)}
             /> 
           </View>
           <View style={[s.flexRow,s.flexWrap]}>
                  <TouchableOpacity
                  onPress={this.confirmationAddCustomer}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnSuccess]}>
                      <Text style={[s.btnText,s.btnSuccessText]}>Save Customer</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           </View>
           </View>
       </ScrollView>
            </>
        )
    }
}