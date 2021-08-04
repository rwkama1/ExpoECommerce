
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
    Text
      } from 'react-native';

import APIOrder from "../../model/API/apiorder";
export default class List_Delivered_Orders extends Component
{
    constructor() {
        super();
        this.state = {
          orders:[],
          loading:true
          };
         }
      
    listDeliveredOrder=()=>
         {
            
          APIOrder.getInstance().getDeliveredOrders().then(getorders =>
            { this.setState(
              {
                orders:getorders,
                loading:false
              }
              );}
            ) 
         }
    componentDidMount()
     {
       this.listDeliveredOrder();
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
           <View style={[s.flexRow,s.flexWrap]}>
           
                  <TouchableOpacity
                  onPress={this.listPendingOrders}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnLight]}>
                      <Text style={[s.btnText,s.btnLightText]}>Update List</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           
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