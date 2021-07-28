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


import APICustomer from "../../model/API/apicustomer";
export default class List_Customer extends Component
{
    constructor() {
        super();
        this.state = {
          customers:[],
          loading:true
          };
         }
      
    listCustomers=()=>
         {
            
            APICustomer.getInstance().getCustomers().then(getcustomers =>
            { this.setState(
              {
                customers:getcustomers,
                loading:false
              }
              );}
            ) 
         }
     componentDidMount()
     {
       this.listCustomers();
      }  
      navigationCustomer=(idcard)=>
        {
          this.props.navigation.navigate("DetailCustomer",{pidcard:idcard});
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
                  onPress={this.listCustomers}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnLight]}>
                      <Text style={[s.btnText,s.btnLightText]}>Update List</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           
           </View>
                <ScrollView>   
     
                  {              
                     this.state.customers.map(
                       c=>
                       {
                return(
                  <ListItem key={c._identitycard} bottomDivider onPress={()=>this.navigationAdmin(c._identitycard)}>
                    <ListItem.Chevron/>
                     <ListItem.Content>
                  <ListItem.Title>
                         {c._completename}   
                 </ListItem.Title>
                 <ListItem.Subtitle>
                         {c._shippingaddress}  
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