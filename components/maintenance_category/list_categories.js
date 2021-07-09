import React,{ Component } from "react";
import {ListItem} from "react-native-elements";
import { StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
     Alert } from 'react-native';

export default class List_categories extends Component
{
    render()
    {
        return(
           <>
           <ScrollView>
           {/* key={p._name} */}
           {/* ()=>this.clickItem(p._name) */}
             <ListItem  bottomDivider onPress={()=>this.navigateDetailCategory()}>
               <ListItem.Chevron/>
                <ListItem.Content>
                      <ListItem.Title>
                               ASFSA       {/* {p._name} */}
                    </ListItem.Title>
                    <ListItem.Subtitle>
                                   SAFSA   {/* {p._producer} */}
                    </ListItem.Subtitle>
                     <ListItem.Subtitle>
                               ASFAS       {/* {p._type} */}
                    </ListItem.Subtitle>
                     <ListItem.Subtitle>
                                ASFSA      {/* {p._pricexseg} */}
                     </ListItem.Subtitle>
                </ListItem.Content>

             </ListItem>

                      
           </ScrollView>
           </>
        )
    }
    navigateDetailCategory=()=>
    {
      this.props.navigation.navigate("DetailCategory",);
    }
}