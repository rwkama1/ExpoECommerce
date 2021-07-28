import React,{ Component } from "react";
import { add_style,text_area } from '../../styles/app_styles';

import { 
    TextInput,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
     Alert } from 'react-native';
import APICategory from "../../model/API/apicategory";
import BootstrapStyleSheet from 'react-native-bootstrap-styles';
import Textarea from "react-native-textarea";
const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;
export default class Add_category extends Component
{
    constructor() {
        super();
        this.state = {
         name:"",
         description:"",
        };
      } 
    
      
      cleanState=()=>
      {
        this.setState(
            {
             name:" ",
             description:" "
            }
        );
    
      }
      
      onChangeText=(name,value)=>//El value es como el e.target.value en React web
      {
        this.setState(
            {
             ...this.state,[name]:value
            }
        )
      }
     confirmationAddCategory=async()=>
    {
        Alert.alert("Add the Category","Are you sure?",
        [
            {text:"Yes",onPress:this.addnewcategory},
            {text:"No",onPress:()=>{console.log(false);}}
        ])
    }
      addnewcategory=()=>
      {       
       
        APICategory.getInstance().addCategory(this.state.name,
             this.state.description ).then(adding => {
                if(adding==="Success")
                {
                  Alert.alert(adding,"Category Added");
                   this.props.navigation.navigate('List Categories');
           
                }
                else
                {
                   Alert.alert("Error",adding);
                }
                 }); 
     } 
    render()
    {
        return(
            <>
        <ScrollView style={add_style.container} >
          <View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Name
            </Text>
               <TextInput 
                value={this.state.name}
                style={[s.formControl]}
               onChangeText={(value)=>this.onChangeText('name',value)}
             /> 

           </View>
           <View style={[s.formGroup]}>
            <Text 
            style={[s.formLabelText]}
            >Description
            </Text>
               <Textarea 
                value={this.state.description}
                containerStyle={text_area.textareaContainer}
                style={text_area.textarea}
               onChangeText={(value)=>this.onChangeText('description',value)}
             /> 

           </View>
           <View style={[s.flexRow,s.flexWrap]}>
                  <TouchableOpacity
                  onPress={this.confirmationAddCategory}
                  style={[s.btnTouchable]}
                   >
                   <View style={[s.btn,s.btnSuccess]}>
                      <Text style={[s.btnText,s.btnSuccessText]}>Save Category</Text> 
                   </View>
                  
                  </TouchableOpacity>
            
           </View>
           </View>
       </ScrollView>
            </>
        )
    }
}