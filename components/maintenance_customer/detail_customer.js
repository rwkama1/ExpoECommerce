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
import APICustomer from "../../model/API/apicustomer";

export default class Detail_Customer extends Component
{
    constructor() {
        super();
        this.state = {
            customer:{},
            idcard:"",
            password:"",
            username:"",
            completename:"",
            creditcard:"", 
            address:"",
         loading:true  
        };
    }
    async componentDidMount()
    {   
        
        const idcardcustomer=this.props.route.params.pidcard;
        const getcustomer=await APIUser.getInstance().getUser(idcardcustomer);
        this.setState({
            customer:getcustomer,
            idcard:getcustomer._identitycard,
            password:getcustomer._password,
            username:getcustomer._username,
            completename:getcustomer._completename,
            creditcard:getcustomer._creditcardnumber,  
            address:getcustomer._shippingaddress,  
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
    confirmationUpdateCustomer=async()=>
    {
        Alert.alert("Update the Customer","Are you sure?",
        [
            {text:"Yes",onPress:this.updateCustomer},
            {text:"No",onPress:()=>{return}}
        ])
    }
    confirmationDeleteCustomer=async()=>
    {
        Alert.alert("Delete the Customer","Are you sure?",
        [
            {text:"Yes",onPress:this.deleteCustomer},
            {text:"No",onPress:()=>{return}}
        ])
    }
    updateCustomer=async()=>
    {
        const {idcard,password,username,completename,creditcard,address}=this.state;
    const updating=await APICustomer.getInstance().updateCustomer(idcard,completename,username,password,address,creditcard)
         if(updating==="Success")
         {
             Alert.alert(updating,"Customer Updated");
            this.props.navigation.navigate('List Customers');
         }
         else
         {
            Alert.alert("Error",updating);
               
         }

    } 
    deleteCustomer=async()=>
    {    
        const delcust=await APICustomer.getInstance().deleteCustomer(this.state.idcard);
        if(delcust==="Success")
        {
            Alert.alert(delcust,"Customer deleted");
           this.props.navigation.navigate('List Customers');
        }
        else
        {
           Alert.alert("Error",delcust);
          
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
           <View style={[s.formGroup,s.formCol,s.col]}>
               <TouchableOpacity
                  onPress={this.confirmationUpdateCustomer}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnPrimary]}>
                      <Text style={[s.btnText,s.btnPrimaryText]}>Update Customer</Text> 
                   </View>
                  
                  </TouchableOpacity>
             </View>
             <View style={[s.formGroup,s.formCol,s.col]}>
                    <TouchableOpacity
                  onPress={this.confirmationDeleteCustomer}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnDanger]}>
                      <Text style={[s.btnText,s.btnDangerText]}>Delete Customer</Text> 
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