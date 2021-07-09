import React,{ Component } from "react";
import { add_style } from '../../styles/app_styles';
import { StyleSheet,
    Text, 
    TextInput,
    ScrollView,
    View,
    Image,
    TouchableOpacity,
    Button,
     Alert } from 'react-native';

export default class Add_category extends Component
{
    render()
    {
        return(
            <>
        <ScrollView style={add_style.container} >
           <View style={add_style.inputGroup}>
               <TextInput placeholder="Name Category" 
               onChangeText={(value)=>this.onChangeText('name',value)} />
           </View>
           <View style={add_style.inputGroup}>
               <TextInput placeholder="Description Category" 
               onChangeText={(value)=>this.onChangeText('description',value)}/>
           </View>
           <View >
               <Button 
                title="Save Category"
               onPress={this.addnewprogram}
               >
               </Button>
           </View>
       </ScrollView>
            </>
        )
    }
}