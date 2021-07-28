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
        position:"" 
        
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
    confirmationAddAdmin=async()=>
    {
        Alert.alert("Add the Admin","Are you sure?",
        [
            {text:"Yes",onPress:this.addnewadmin},
            {text:"No",onPress:()=>{return}}
        ])
    }
    addnewadmin=()=>
    {       
     const {idcard,password,username,completename,position}=this.state;
      APIAdmin.getInstance().addAdmin(idcard,completename,username,password,position).then(adding => {
              if(adding==="Success")
              {
                Alert.alert(adding,"Admin Added");
                 this.props.navigation.navigate('List Admins');
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
            >Position
            </Text>
               <TextInput 
                value={this.state.position}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('position',value)}
             /> 

           </View>
           <View style={[s.flexRow,s.flexWrap]}>
                  <TouchableOpacity
                  onPress={this.confirmationAddAdmin}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnSuccess]}>
                      <Text style={[s.btnText,s.btnSuccessText]}>Save Admin</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           </View>
           </View>
       </ScrollView>
            </>
        )
    }
}