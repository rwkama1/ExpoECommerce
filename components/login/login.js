import React,{ Component } from "react";
import { add_style,login } from '../../styles/app_styles';

import { 
    TextInput,
    View,
    TouchableOpacity,
    Alert
      } from 'react-native';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import {Text} from "react-native-elements"
import APIUser from "../../model/API/apiuser";

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
export default class Login extends Component
{
    constructor() {
        super();
        this.state = {
          username:"",
          password:"",
     
          };
         }
  onChangeText=(name,value)=>
         {
           this.setState(
               {
                ...this.state,[name]:value
               }
           )
         }
     login=()=>
         {       
          const {username,password}=this.state;
           APIUser.getInstance().login(username,password).then(login => {
                   if(login.bool===true)
                   {
                      this.props.navigation.navigate('Home');
                   }
                   if(login.bool===false)
                   {
                      Alert.alert("Error",login.error);
                   }
                    }); 
        }  
    render()
    {
        return(
        <>
           
            <View style={add_style.container}>
            <View style={[s.formGroup]}>
                    <Text style={[s.formLabelText]} >
                          Username
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
                            >
                             Password
                            </Text>
                            <TextInput 
                                value={this.state.password}
                                secureTextEntry={true}
                                style={[s.formControl]}
                            onChangeText={(value)=>this.onChangeText('password',value)}
                            /> 

                </View>
                <View style={[s.flexRow,s.flexWrap]}>
              
                  <TouchableOpacity
                  onPress={this.login}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnInfo]}>
                      <Text style={[s.btnText,s.btnInfoText]}>Sign in</Text> 
                   </View>
                  
                  </TouchableOpacity>
                
           </View>
            </View>
            </>
       
        )
    }
}