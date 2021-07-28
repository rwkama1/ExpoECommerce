import React,{ Component } from "react";
import { add_style,text_area } from '../../styles/app_styles';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import { 
    Text, 
    TextInput,
    ScrollView,
    View,
    Alert,
    ActivityIndicator,
    TouchableOpacity } from 'react-native';
import APIUser from "../../model/API/apiuser";
import APIAdmin from "../../model/API/apiadmin";

export default class Detail_Admin extends Component
{
    constructor() {
        super();
        this.state = {
         admin:{},
         idcard:"",
         password:"",
         username:"",
         completename:"",
         position:"" ,  
         loading:true  
        };
    }
    async componentDidMount()
    {   
        
        const idcardadmin=this.props.route.params.pidcard;
        const getadmin=await APIUser.getInstance().getUser(idcardadmin);
        this.setState({
            admin:getadmin,
            idcard:getadmin._identitycard,
            password:getadmin._password,
            username:getadmin._username,
            completename:getadmin._completename,
            position:getadmin._position,  
            loading:false
        });
    }
    onChangeText=(name,value)=>
    {
      this.setState(
          {
           ...this.state,[name]:value
          }
      )
    }
    confirmationUpdateAdmin=async()=>
    {
        Alert.alert("Update the Admin","Are you sure?",
        [
            {text:"Yes",onPress:this.updateAdmin},
            {text:"No",onPress:()=>{return}}
        ])
    }
    confirmationDeleteAdmin=async()=>
    {
        Alert.alert("Delete the Admin","Are you sure?",
        [
            {text:"Yes",onPress:this.deleteAdmin},
            {text:"No",onPress:()=>{return}}
        ])
    }
    updateAdmin=async()=>
    {
        const {idcard,password,username,completename,position}=this.state;
    const updating=await APIAdmin.getInstance().updateAdmin(idcard,completename,username,password,position)
         if(updating==="Success")
         {
             Alert.alert(updating,"Admin Updated");
            this.props.navigation.navigate('List Admins');
         }
         else
         {
            Alert.alert("Error",updating);
               
         }

    } 
    deleteAdmin=async()=>
    {    
        const deladmin=await APIAdmin.getInstance().deleteAdmin(this.state.idcard);
        if(deladmin==="Success")
        {
            Alert.alert(deladmin,"Admin deleted");
           this.props.navigation.navigate('List Admins');
        }
        else
        {
           Alert.alert("Error",deladmin);
          
        }
    }
    render()
    {
        if(this.state.loading)
        {
            return(
            <View>
                <ActivityIndicator animating={true} size="large" color="#9e9e9e">
    
                </ActivityIndicator>
            </View>
            )
        }
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
                editable={false}
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
                editable={false}
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
           <View style={[s.formGroup,s.formCol,s.col]}>
               <TouchableOpacity
                  onPress={this.confirmationUpdateAdmin}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnPrimary]}>
                      <Text style={[s.btnText,s.btnPrimaryText]}>Update Admin</Text> 
                   </View>
                  
                  </TouchableOpacity>
             </View>
             <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  onPress={this.confirmationDeleteAdmin}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnDanger]}>
                      <Text style={[s.btnText,s.btnDangerText]}>Delete Admin</Text> 
                   </View>
                  
                  </TouchableOpacity>
              </View>
           </View>
        </View>
       </ScrollView>
            </>
        )
    }
}