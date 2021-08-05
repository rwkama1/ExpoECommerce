
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
export default class List_Order_by_date extends Component
{
    constructor() {
        super();
        this.state = {
          orders:[],
          date1:"",
          date2:"",
     
          };
         }
   
    listorderbydate=()=>
         {
      const { date1,date2 } = this.state;
          APIOrder.getInstance().getOrderbydates(date1,date2).then(getorders =>
            { this.setState(
              {
                orders:getorders,
              }
              );}
            ) 
         } 
    navigationDateOrder=(id)=>
        {
          this.props.navigation.navigate("DetailDateOrder",{pid:id});
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
                   value={this.state.date1}
                   keyboardType="numeric"
                   placeholder="First Date (YYYY-MM-DD)"
                   onChangeText={(value)=>this.setState({date1:value})}/>
            
              </View>
          
          </View>
          <View style={[s.formGroup,s.formCol,s.co3]}>
              <View style={[s.colPadding]} >
               
                  
              <TextInput style={[s.formControl]}
                   value={this.state.date2}
                   keyboardType="numeric"

                   placeholder="Second Date (YYYY-MM-DD)"
                   onChangeText={(value)=>this.setState({date2:value})}/>
                 
              </View>
          
          </View>
          <View style={[s.formGroup,s.formCol,s.co3]}>
          <TouchableOpacity
                  onPress={this.listorderbydate}
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
                  <ListItem key={c._id} bottomDivider onPress={()=>this.navigationDateOrder(c._id)}>
                    <ListItem.Chevron/>
                     <ListItem.Content>
                      
                  <ListItem.Title>
                    Date: {c._date}   
                 </ListItem.Title>
                 <ListItem.Subtitle>
                      Customer:  {c._client._completename}  
                 </ListItem.Subtitle>
                 <ListItem.Subtitle>
                 Delivery Address: {c._client._shippingaddress}  
                 </ListItem.Subtitle>
                 <ListItem.Subtitle>
                   Quantity Total Articles:  {c._listOrderDetails.length}  
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