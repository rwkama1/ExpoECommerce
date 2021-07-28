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

import APIAdmin from "../../model/API/apiadmin";
export default class List_Admins extends Component
{
    constructor() {
        super();
        this.state = {
          admins:[],
          loading:true
          };
         }
      
    listAdmins=()=>
         {
            
            APIAdmin.getInstance().getAdmins().then(getAdmins =>
            { this.setState(
              {
                admins:getAdmins,
                loading:false
              }
              );}
            ) 
         }
     componentDidMount()
     {
       this.listAdmins();
      }  
      navigationAdmin=(idcard)=>
        {
          this.props.navigation.navigate("DetailAdmin",{pidcard:idcard});
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
                  onPress={this.listAdmins}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnLight]}>
                      <Text style={[s.btnText,s.btnLightText]}>Update List</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           
           </View>
                <ScrollView>   
     
                  {              
                     this.state.admins.map(
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
                         {c._position}  
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