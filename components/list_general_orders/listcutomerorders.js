
import React,{ Component } from "react";
import {ListItem} from "react-native-elements";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
import {  
    View,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    Text,
    TextInput
      } from 'react-native';

import APIOrder from "../../model/API/apiorder";
export default class List_Customer_Orders extends Component
{
    constructor() {
        super();
        this.state = {
          orders:[],
          idcard:"",
        loading:true
          };
         }
    listGeneralOrder=()=>
         {
            
          APIOrder.getInstance().getGeneralOrders().then(getorders =>
            { this.setState(
              {
                orders:getorders,
                loading:false
              }
              );}
            ) 
         }
    listCustomerOrder=()=>
         {
          const { idcard } = this.state;
          APIOrder.getInstance().getCustomerOrders(idcard).then(getorders =>
            { this.setState(
              {
                orders:getorders,
              
            
              }
              );}
            ) 
         }
    componentDidMount()
     {
       this.listGeneralOrder();
      }  
    navigationGeneralOrder=(id)=>
        {
          this.props.navigation.navigate("DetailGeneralOrder",{pid:id});
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
          <View style={[s.formRow,s.row]}>
          <View style={[s.formGroup,s.formCol,s.co3]}>
              <View style={[s.colPadding]} >
                   <TextInput style={[s.formControl]}
                   value={this.state.idcard}
                   placeholder="Identity Card"
                   onChangeText={(value)=>this.setState({idcard:value})}/>
              </View>
          
          </View>
          <View style={[s.formGroup,s.formCol,s.co3]}>
          <TouchableOpacity
                  onPress={this.listCustomerOrder}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnLight]}>
                      <Text style={[s.btnText,s.btnLightText]}>Search Order</Text> 
                   </View>
                  
                  </TouchableOpacity>
          
          </View>
            
           </View>
        
                <ScrollView>   
     
                  {              
                     this.state.orders.map(
                       c=>
                       {
                return(
                  <ListItem key={c._id} bottomDivider onPress={()=>this.navigationGeneralOrder(c._id)}>
                    <ListItem.Chevron/>
                     <ListItem.Content>
                  <ListItem.Title>
                    Customer: {c._client._identitycard}   
                 </ListItem.Title>
                 <ListItem.Subtitle>
                         {c._state}  
                 </ListItem.Subtitle>
                </ListItem.Content>
     
                  </ListItem>
                        )
                       }
               )
               
              }
              </ScrollView>
              </>
              )
          
         
         } 
}